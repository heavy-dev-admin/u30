import { apiVersion, dataset, projectId, studioUrl, useCdn } from 'lib/sanity.api'
import {
  aboutPageQuery,
  careerPageQuery,
  homepageQuery,
  industriesPageQuery,
  settingsQuery,
  workPageQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'
import {
  AboutSettings,
  CareerSettings,
  HomepageSettings,
  IndustriesSettings,
  WorkSettings,
} from 'types/pages'
import type { Settings } from 'types/settings'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'drafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return await client.fetch(settingsQuery)
}

export async function getHomepageSettings(client: SanityClient): Promise<HomepageSettings> {
  return await client.fetch(homepageQuery)
}

export async function getAboutSettings(client: SanityClient): Promise<AboutSettings> {
  return await client.fetch(aboutPageQuery)
}

export async function getCareerSettings(client: SanityClient): Promise<CareerSettings> {
  return await client.fetch(careerPageQuery)
}

export async function getIndustriesSettings(client: SanityClient): Promise<IndustriesSettings> {
  return await client.fetch(industriesPageQuery)
}

export async function getWorkSettings(client: SanityClient): Promise<WorkSettings> {
  return await client.fetch(workPageQuery)
}
