import { ComposeIcon } from '@sanity/icons'
import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
  groups: [
    {
      default: true,
      name: 'sections',
      title: 'Sections',
      icon: ComposeIcon,
    },
  ],
  fields: [
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
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'fourRights',
      description: '4 Rights section settings',
      title: '4 Rights section',
      type: 'object',
      group: 'sections',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'rights',
          type: 'array',
          of: [{ type: 'right' }],
          validation: (rule) => rule.required().max(4),
        }),
      ],
    }),
    flexibleSectionsField,
  ],
})
