import { defineField } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineField({
  name: 'workBlock',
  title: 'Work Block',
  type: 'object',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'services',
      options: {
        list: [
          { title: 'Services', value: 'services' },
          { title: 'Services-2', value: 'services-2' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule) => rule.required(),
    }),
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
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      hidden: ({ parent }) => parent?.type !== 'solid',
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      hidden: ({ parent }) => parent?.type !== 'solid',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'This image will be displayed when the block type is set to "Image".',
      hidden: ({ parent }) => parent?.type !== 'image',
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
      name: 'reference',
      title: 'Reference',
      type: 'string',
      description: 'Input slug of the workblock in the services section for the reference.',
      hidden: ({ parent }) => parent?.location !== 'services-2',
    }),
  ],
})
