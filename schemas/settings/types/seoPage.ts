import { defineField } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export const seoPageType = defineField({
  name: 'seoPage',
  title: 'SEO Page',
  type: 'object',
  group: 'seoPage',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'siteTitle'},
      validation: validateSlug,
      initialValue: {
        current: 'about'
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 2,
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'shareImage',
      type: 'image',
    })
  ]
})