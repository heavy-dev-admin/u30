import { BlockContentIcon, ComposeIcon, DocumentIcon,SearchIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export const pageType = defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      icon: SearchIcon
    },
    {
      default: true,
      name: 'content',
      title: 'Content',
      icon: BlockContentIcon
    },
    {
      name: 'meta',
      title: 'Meta',
      icon: ComposeIcon
    }
  ],
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description',
      type: 'portableTextSimple',
      group: 'seo'
    }),
    defineField({
      name: 'shareImage',
      title: 'Share Image',
      type: 'image',
      group: 'seo'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title'},
      validation: validateSlug,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableTextSimple',
      group: 'content'
    }),
    defineField({
      name: 'metaTitle',
      title: 'Title',
      type: 'string',
      group: 'meta'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Description',
      type: 'portableTextSimple',
      group: 'meta'
    }),
    defineField({
      name: 'metaShareImage',
      title: 'Share Image',
      type: 'image',
      group: 'meta'
    })
  ]
})
