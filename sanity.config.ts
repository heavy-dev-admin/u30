'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, DRAFT_MODE_ROUTE, projectId } from 'lib/sanity.api'
import { locate } from 'plugins/locate'
import { previewDocumentNode } from 'plugins/previewPane'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import clientType from 'schemas/documents/client'
import pageType from 'schemas/documents/page'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import linkExternalField from 'schemas/fields/linkExternal'
import linkInternalField from 'schemas/fields/linkInternal'
import portableTextSimpleField from 'schemas/fields/portableTextSimple'
import rightField from 'schemas/fields/right'
import seoPageField from 'schemas/fields/seoPage'
import serviceBlockField from 'schemas/fields/serviceBlock'
import aboutType from 'schemas/pages/about'
import careersType from 'schemas/pages/careers'
import homepageType from 'schemas/pages/homepage'
import industriesType from 'schemas/pages/industries'
import servicesType from 'schemas/pages/services'
import clientQuotesSectionType from 'schemas/sections/clientQuotesSection'
import clientsSectionType from 'schemas/sections/clientsSection'
import richTextSectionType from 'schemas/sections/richTextSection'
import simpleCtaSectionType from 'schemas/sections/simpleCtaSection'
import twoUpSectionType from 'schemas/sections/twoUpSection'
import settingsType from 'schemas/settings'

// All your shared schema types and plugin imports remain the same...

const schemaTypes = [
  // fields
  linkInternalField,
  linkExternalField,
  serviceBlockField,
  rightField,
  portableTextSimpleField,
  seoPageField,
  flexibleSectionsField,
  // documents
  clientType,
  pageType,
  // sections
  clientsSectionType,
  clientQuotesSectionType,
  twoUpSectionType,
  richTextSectionType,
  simpleCtaSectionType,
  // settings
  settingsType,
  // pages
  homepageType,
  aboutType,
  careersType,
  servicesType,
  industriesType,
]

const sharedPlugins = [
  structureTool({
    structure: settingsStructure(
      [settingsType],
      [homepageType, aboutType, servicesType, industriesType, careersType],
      [clientType]
    ),
    defaultDocumentNode: previewDocumentNode(),
  }),
  presentationTool({
    locate,
    previewUrl: {
      previewMode: {
        enable: DRAFT_MODE_ROUTE,
      },
    },
  }),
  settingsPlugin({ type: settingsType.name }),
  unsplashImageAsset(),
  colorInput(),
  process.env.NODE_ENV !== 'production' && visionTool({ defaultApiVersion: apiVersion }),
]

const studioUrl = '/studio'
const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig([
  {
    name: 'production',
    title: `${title} (Production)`,
    basePath: `${studioUrl}/production`,
    projectId,
    dataset: 'production',
    schema: { types: schemaTypes },
    plugins: sharedPlugins,
  },
  {
    name: 'staging',
    title: `${title} (Staging)`,
    basePath: `${studioUrl}/staging`,
    projectId,
    dataset: 'staging',
    schema: { types: schemaTypes },
    plugins: sharedPlugins,
  },
])
