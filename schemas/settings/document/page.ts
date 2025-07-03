import { DocumentIcon } from '@sanity/icons'
import { GROUPS } from 'constant'
import { defineField } from 'sanity'

import { seoPageType } from '../types/seoPage'

export const pageType = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: GROUPS,
  fields: [
    seoPageType
  ]
})
