import { apiVersion, dataset, projectId, studioUrl, useCdn } from 'lib/sanity.api'
import {
  aboutPageQuery,
  careersPageQuery,
  generalPageQuery,
  homepageQuery,
  industriesPageQuery,
  servicesPageQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'
import {
  AboutSettings,
  CareersSettings,
  GeneralPageSettings,
  HomepageSettings,
  IndustriesSettings,
  ServicesSettings,
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

export async function getCareersSettings(client: SanityClient): Promise<CareersSettings> {
  return await client.fetch(careersPageQuery)
}

export async function getIndustriesSettings(client: SanityClient): Promise<IndustriesSettings> {
  return await client.fetch(industriesPageQuery)
}

export async function getServicesSettings(client: SanityClient): Promise<ServicesSettings> {
  return await client.fetch(servicesPageQuery)
}

export async function getGeneralPageSettings(
  client: SanityClient,
  slug: string
): Promise<GeneralPageSettings> {
  return await client.fetch(generalPageQuery, { slug })
}
