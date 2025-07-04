import { BlockContentIcon, DocumentIcon, SearchIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
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
      name: 'sections',
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
      group: 'sections',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableTextSimple',
      group: 'sections',
    }),
    flexibleSectionsField,
  ],
})
