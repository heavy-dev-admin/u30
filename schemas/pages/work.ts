import { TiersIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: TiersIcon,
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
          name: 'workHeroBlocks',
          title: 'Work Hero Blocks',
          type: 'array',
          of: [{ type: 'workBlock' }],
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
          to: [{ type: 'clientsSection' }, { type: 'clientQuotesSection' }],
        }),
      ],
    }),
  ],
})
