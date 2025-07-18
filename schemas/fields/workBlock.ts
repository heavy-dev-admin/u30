import { defineField } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineField({
  name: 'workBlock',
  title: 'Work Block',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'solid',
      options: {
        list: [
          { title: 'Solid background', value: 'solid' },
          { title: 'Image', value: 'image' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'workBlock.title',
      },
      validation: validateSlug,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'This image will be displayed when the block type is set to "Image".',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
  ],
})
