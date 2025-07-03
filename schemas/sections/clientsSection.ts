import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientsSection',
  title: 'Clients Section',
  type: 'document',
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
      type: 'reference',
      to: [
        { type: 'client' }
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'grid',
      options: {
        list: [
          { title: 'Ticker', value: 'ticker' },
          { title: 'Grid', value: 'grid' }
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
})
