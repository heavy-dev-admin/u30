import { defineField } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineField({
  name: 'seoPage',
  title: 'SEO',
  type: 'object',
  group: 'seoPage',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextSimple',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'seoPage.title',
      },
      validation: validateSlug,
    }),
    defineField({
      name: 'shareImage',
      title: 'Share Image',
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
  ],
})
