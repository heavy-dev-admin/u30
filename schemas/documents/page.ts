import { BlockContentIcon, DocumentIcon, SearchIcon } from '@sanity/icons'
import { defineArrayMember, defineField } from 'sanity'
import seoPageField from 'schemas/fields/seoPage'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'seoPage',
      title: 'SEO',
      icon: SearchIcon,
    },
    {
      default: true,
      name: 'content',
      title: 'Content',
      icon: BlockContentIcon,
    },
  ],
  fields: [
    seoPageField,
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableTextSimple',
      group: 'content',
    }),
    defineField({
      name: 'flexibleSections',
      title: 'Flexible Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'clientsSection' }, { type: 'clientQuotesSection' }],
        }),
      ],
      group: 'content',
    }),
  ],
})
