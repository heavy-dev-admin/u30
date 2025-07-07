import { ComposeIcon, ListIcon, SearchIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineType({
  name: 'industries',
  title: 'Industries',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Industries',
      }
    },
  },
  icon: ListIcon,
  groups: [
    {
      name: 'seoPage',
      title: 'SEO',
      icon: SearchIcon,
    },
    {
      default: true,
      name: 'sections',
      title: 'Sections',
      icon: ComposeIcon,
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
      name: 'hero',
      description: 'Hero section settings',
      title: 'Hero section',
      type: 'object',
      group: 'sections',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'portableTextSimple',
        }),
      ],
    }),
    defineField({
      name: 'industries',
      title: 'Industries section',
      type: 'array',
      group: 'sections',
      of: [
        {
          name: 'industry',
          title: 'Industry',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'clients',
              title: 'Clients',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'reference',
                  to: [{ type: 'client' }],
                }),
              ],
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    flexibleSectionsField,
  ],
})
