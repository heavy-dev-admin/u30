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
import workBlockField from 'schemas/fields/workBlock'
import aboutType from 'schemas/pages/about'
import careerType from 'schemas/pages/career'
import homepageType from 'schemas/pages/homepage'
import industriesType from 'schemas/pages/industries'
import workType from 'schemas/pages/work'
import clientQuotesSectionType from 'schemas/sections/clientQuotesSection'
import clientsSectionType from 'schemas/sections/clientsSection'
import richTextSectionType from 'schemas/sections/richTextSection'
import simpleCtaSectionType from 'schemas/sections/simpleCtaSection'
import twoUpSectionType from 'schemas/sections/twoUpSection'
import settingsType from 'schemas/settings'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // fields
      linkInternalField,
      linkExternalField,
      workBlockField,
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
      careerType,
      workType,
      industriesType,
    ],
  },
  plugins: [
    structureTool({
      structure: settingsStructure(
        [settingsType],
        [homepageType, careerType, workType, industriesType, aboutType],
        [clientType]
      ),
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
    process.env.NODE_ENV !== 'production' && visionTool({ defaultApiVersion: apiVersion }),
  ],
})
