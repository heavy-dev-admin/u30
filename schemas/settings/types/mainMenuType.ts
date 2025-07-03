import { defineField } from 'sanity'

export const mainMenuType = defineField({
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
      type: 'array',
      of: [{type: 'linkInternal'}]
    }),
    defineField({
      name: 'contactURL',
      title: 'Contact URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
})
