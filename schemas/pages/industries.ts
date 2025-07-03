import { ListIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'industries',
  title: 'Industries',
  type: 'document',
  icon: ListIcon,
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
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'industries',
      title: 'Industries section',
      type: 'array',
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
    }),
  ],
})
