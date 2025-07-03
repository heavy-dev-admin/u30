import { CaseIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  icon: CaseIcon,
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
        defineField({
          name: 'heroType',
          title: 'Hero Type',
          type: 'string',
          initialValue: 'primary',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' }
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
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
