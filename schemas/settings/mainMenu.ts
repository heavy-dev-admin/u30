import { defineField } from 'sanity'

export default defineField({
  name: 'menu',
  title: 'Menu',
  type: 'object',
  group: 'mainMenu',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'linkInternal'}]
    }),
    defineField({
      name: 'contactUrl',
      title: 'Contact URL',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
})
