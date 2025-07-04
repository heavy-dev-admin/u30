import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'twoUpSection',
  title: 'Two Up Section',
  type: 'document',
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
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageLeft',
      title: 'Image Left',
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
    defineField({
      name: 'imageRight',
      title: 'Image Right',
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
    defineField({
      name: 'textBubbleLeft',
      title: 'Text Bubble Left',
      type: 'string',
    }),
    defineField({
      name: 'textBubbleRight',
      title: 'Text Bubble Right',
      type: 'string',
    }),
  ],
})
