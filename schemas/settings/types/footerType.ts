import { defineField } from 'sanity'

export const footerType = defineField({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  group: 'footer',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'footerMenu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'linkInternal'}]
    }),
    defineField({
      name: 'contactURL',
      title: 'Contact URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'footerHeader',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'footerContactButtonText',
      title: 'Contact Button Text',
      type: 'string',
    }),
    defineField({
      name: 'footerEmailContact',
      title: 'Email for Contact',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: 'email',
          invert: false,
        }).error('Must be a valid email address'),
    }),
  ],
})
