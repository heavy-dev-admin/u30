import {defineField} from 'sanity'

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
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
    })
  ],
})
