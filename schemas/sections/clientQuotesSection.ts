import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientQuotesSection',
  title: 'Client Quote Section',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Client Quote Section'
      }
    }
  },
  fields: [
    defineField({
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'quote_item',
          title: 'Quote Item',
          fields: [
            defineField({
              type: 'reference',
              name: 'client',
              title: 'Client',
              to: [{ type: 'client' }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'text',
              name: 'quote',
              title: 'Quote content',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'string',
              name: 'attributor',
              title: 'Attributor',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
