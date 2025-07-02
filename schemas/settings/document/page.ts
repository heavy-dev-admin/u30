import {DocumentIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {validateSlug} from 'schemas/utils/validateSlug'

export const pageType = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
    })
  ]
})
