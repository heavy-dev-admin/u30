import { ComposeIcon, ListIcon, SearchIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import seoPageField from 'schemas/fields/seoPage'

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
    seoPageField,
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
