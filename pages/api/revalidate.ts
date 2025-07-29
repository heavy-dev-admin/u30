/**
 * This code is responsible for revalidating the cache when a post or author is updated.
 *
 * It is set up to receive a validated GROQ-powered Webhook from Sanity.io:
 * https://www.sanity.io/docs/webhooks
 *
 * 1. Go to the API section of your Sanity project on sanity.io/manage or run `npx sanity hook create`
 * 2. Click "Create webhook"
 * 3. Set the URL to https://YOUR_NEXTJS_SITE_URL/api/revalidate
 * 4. Dataset: Choose desired dataset or leave at default "all datasets"
 * 5. Trigger on: "Create", "Update", and "Delete"
 * 6. Filter: _type == "post" || _type == "author" || _type == "settings"
 * 7. Projection: Leave empty
 * 8. Status: Enable webhook
 * 9. HTTP method: POST
 * 10. HTTP Headers: Leave empty750044
 * 11. API version: v2021-03-25
 * 12. Include drafts: No
 * 13. Secret: Set to the same value as SANITY_REVALIDATE_SECRET (create a random secret if you haven't yet)
 * 14. Save the cofiguration
 * 15. Add the secret to Vercel: `npx vercel env add SANITY_REVALIDATE_SECRET`
 * 16. Redeploy with `npx vercel --prod` to apply the new environment variable
 */

import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { SanityClient } from 'next-sanity'
import { createClient } from 'next-sanity'
import type { ParsedBody } from 'next-sanity/webhook'
import type { SanityDocument } from 'sanity'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body, isValidSignature } = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      return res.status(401).send('Invalid signature')
    }

    if (!body || typeof body._type !== 'string') {
      return res.status(400).send('Invalid webhook payload: Missing _type')
    }

    const paths = await resolvePathsToRevalidate(body)
    await Promise.all(paths.map((path) => res.revalidate(path)))

    console.log('Revalidated:', paths)
    return res.status(200).json({ revalidated: paths })
  } catch (err) {
    console.error('Revalidation error:', err)
    return res.status(500).send((err as Error).message)
  }
}

async function parseBody<Body = SanityDocument>(
  req: NextApiRequest,
  secret?: string
): Promise<ParsedBody<Body>> {
  let signature = req.headers[SIGNATURE_HEADER_NAME]
  if (Array.isArray(signature)) signature = signature[0]

  if (!signature) {
    console.error('Missing signature header')
    return { body: null, isValidSignature: null }
  }

  if (req.readableEnded) {
    throw new Error(`Request body already read. Check export const config.`)
  }

  const rawBody = await readBody(req)
  const isValid = secret ? await isValidSignature(rawBody, signature, secret.trim()) : null

  await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for Sanity consistency
  return {
    body: rawBody.trim() ? JSON.parse(rawBody) : null,
    isValidSignature: isValid,
  }
}

async function readBody(req: NextApiRequest): Promise<string> {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

type WebhookDoc = {
  _type: string
  slug?: { current?: string }
}

async function resolvePathsToRevalidate(body: WebhookDoc): Promise<string[]> {
  const client = createClient({ projectId, dataset, apiVersion, useCdn: false })

  switch (body._type) {
    case 'settings':
      return await getAllPageRoutes(client)
    case 'homepage':
      return ['/']
    case 'page':
      if (body.slug?.current) return [`/${body.slug.current}`]
      return []
    default:
      return [`/${body._type}`]
  }
}

async function getAllPageRoutes(client: SanityClient): Promise<string[]> {
  const slugs: string[] = await client.fetch(
    `*[_type == "page" && defined(slug.current)].slug.current`
  )
  return ['/', ...slugs.map((slug) => `/${slug}`)]
}
