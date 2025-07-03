import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  fields: [
    defineField({
      name: 'hero',
      description: 'Hero section settings',
      title: 'Hero section',
      type: 'object',
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
              description: 'Important for SEO and accessiblity.',
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
          of: [
            {
              type: 'object',
              name: 'right',
              fields: [
                defineField({
                  type: 'string',
                  name: 'label',
                  title: 'Label',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  type: 'image',
                  name: 'emblem',
                  title: 'Emblem',
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      description: 'Important for SEO and accessiblity.',
                    },
                  ],
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  type: 'text',
                  name: 'detail',
                  title: 'Detail',
                }),
              ],
            },
          ],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'flexibleSections',
      title: 'Flexible Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [
            { type: 'clientsSection' },
            { type: 'clientQuotesSection' },
          ],
        }),
      ],
    }),
  ],
})
