import { CogIcon } from '@sanity/icons'
import { defineType } from 'sanity'
import { footerType } from 'schemas/settings/types/footerType'
import { mainMenuType } from 'schemas/settings/types/mainMenuType'
import { seoType } from 'schemas/settings/types/seoType'

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
    seoType,
    mainMenuType,
    footerType
  ],
})
