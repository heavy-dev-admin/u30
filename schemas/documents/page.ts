import { BlockContentIcon, DocumentsIcon, SearchIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import seoPageField from 'schemas/fields/seoPage'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: DocumentsIcon,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'sections',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
