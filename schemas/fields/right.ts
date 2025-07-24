import { defineField } from 'sanity'

export default defineField({
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
          description: 'Important for SEO and accessibility.',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'detail',
      title: 'Detail',
    }),
    defineField({
      type: 'color',
      name: 'backgroundColor',
      title: 'Background Color',
      options: {
        disableAlpha: true,
      },
    }),
  ],
})
