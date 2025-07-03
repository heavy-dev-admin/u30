import { CogIcon } from '@sanity/icons'
import { defineType } from 'sanity'
import footerType from 'schemas/settings/footer'
import mainMenuType from 'schemas/settings/mainMenu'
import seoGlobalType from 'schemas/settings/seoGlobal'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
    {
      name: 'mainMenu',
      title: 'Main Menu'
    },
    {
      name: "footer",
      title: "Footer"
    }
  ],
  fields: [
    seoGlobalType,
    mainMenuType,
    footerType
  ],
})
