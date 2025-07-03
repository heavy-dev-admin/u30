import { ComposeIcon, SearchIcon, UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import seoPageField from 'schemas/fields/seoPage'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UserIcon,
  groups: [
    {
      name: 'seoPage',
      title: 'SEO',
      icon: SearchIcon
    },
    {
    default: true,
    name: 'sections',
    title: 'Sections',
    icon: ComposeIcon
  }],
  fields: [
    seoPageField,
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      group: 'sections',
      options: {
        list: [
          { title: 'primary', value: 'side-by-side' },
          { title: 'secondary', value: 'stacked' },
        ],
        layout: 'radio',
      },
      initialValue: 'side-by-side',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'sections',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextSimple',
      group: 'sections',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'sections',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: 'flexibleSections',
      title: 'Flexible Sections',
      group: 'sections',
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