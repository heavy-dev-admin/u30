import { UsersIcon } from '@sanity/icons'
import SizeSlider from 'components/Sanity/SizeSlider'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client',
  title: 'Clients',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'logoSize',
      title: 'Logo Width',
      type: 'number',
      initialValue: 100,
      validation: (Rule) =>
        Rule.min(0)
          .max(100)
          .custom((val) => (val % 10 === 0 ? true : 'Must be in increments of 10')),
      components: {
        input: SizeSlider,
      },
    }),
  ],
})
