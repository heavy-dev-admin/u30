'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import {
  apiVersion,
  dataset,
  DRAFT_MODE_ROUTE,
  projectId,
} from 'lib/sanity.api'
import { locate } from 'plugins/locate'
import { previewDocumentNode } from 'plugins/previewPane'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import clientType from 'schemas/documents/client'
import pageType from 'schemas/documents/page'
import linkExternalField from 'schemas/fields/linkExternal'
import linkInternalField from 'schemas/fields/linkInternal'
import portableTextSimpleType from 'schemas/fields/portableTextSimple'
import seoPageField from 'schemas/fields/seoPage'
import aboutPageType from 'schemas/pages/about'
import careerType from 'schemas/pages/career'
import homepageType from 'schemas/pages/homepage'
import workBlockType from 'schemas/fields/workBlock'
import industriesType from 'schemas/pages/industries'
import workType from 'schemas/pages/work'
import clientQuotesSectionType from 'schemas/sections/clientQuotesSection'
import clientsSectionType from 'schemas/sections/clientsSection'
import settingsType from 'schemas/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      linkInternalField,
      linkExternalField,
      clientType,
      homepageType,
      clientsSectionType,
      clientQuotesSectionType,
      settingsType,
      pageType,
      portableTextSimpleType,
      aboutPageType,
      seoPageField,
      workBlockType,
      clientType,
      careerType,
      workType,
      industriesType,
    ],
  },
  plugins: [
    structureTool({
      structure: settingsStructure([
        settingsType,
        homepageType,
        careerType,
        workType,
        industriesType,
      ]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
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
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    colorInput(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV !== 'production' &&
      visionTool({ defaultApiVersion: apiVersion }),
  ],
})
