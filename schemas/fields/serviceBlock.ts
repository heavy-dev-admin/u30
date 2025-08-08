import SizeSlider from 'components/Sanity/SizeSlider'
import { defineField } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineField({
  name: 'serviceBlock',
  title: 'Service Block',
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
      hidden: ({ parent }) => parent?.type === 'image',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc, context) => {
          const parent = context.parent as any
          return parent?.title || ''
        },
      },
      validation: validateSlug,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      hidden: ({ parent }) => parent?.type === 'image',
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
      name: 'logoSize',
      title: 'Logo Width',
      type: 'number',
      initialValue: 100,
      hidden: ({ parent }) => parent?.type !== 'solid',
      // validation: (Rule) =>
      //   Rule.min(0)
      //     .max(100)
      //     .custom((val) => (val % 10 === 0 ? true : 'Must be in increments of 10')),
      components: {
        input: SizeSlider,
      },
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
  preview: {
    select: {
      type: 'type',
      title: 'title',
      image: 'image',
      imageAlt: 'image.alt',
      icon: 'icon',
      iconAlt: 'icon.alt',
    },
    prepare({ type, title, image, imageAlt, icon, iconAlt }) {
      if (type === 'image' && image) {
        return {
          title: imageAlt || 'Image',
          media: image,
        }
      }
      return {
        title,
        media: icon,
      }
    },
  },
})
