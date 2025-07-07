import { BlockContentIcon, DocumentIcon, SearchIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineType({
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
    defineField({
      name: 'seoTitle',
      title: 'Title',
      group: 'seoPage',
      type: 'string',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description',
      group: 'seoPage',
      type: 'portableTextSimple',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      group: 'seoPage',
      type: 'slug',
      options: {
        source: 'seoTitle',
      },
      validation: validateSlug,
    }),
    defineField({
      name: 'seoShareImage',
      title: 'Share Image',
      group: 'seoPage',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
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
