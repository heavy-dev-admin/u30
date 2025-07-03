import { ComposeIcon, SearchIcon, UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UserIcon,
  groups: [{
    default: true,
    name: 'hero',
    title: 'Hero',
    icon: ComposeIcon
  },
  {
    name: 'seoPage',
    title: 'SEO',
    icon: SearchIcon
  }],
  fields: [
    defineField({
      name: 'seoTitle',
      type: 'string',
      group: 'seoPage',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'seoPage',
      options: {source: 'seoTitle'},
      validation: validateSlug,
      initialValue: {
        current: 'about'
      },
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      rows: 2,
      group: 'seoPage',
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'seoShareImage',
      type: 'image',
      group: 'seoPage',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      group: 'hero',
      options: {
        list: [
          { title: 'primary', value: 'Side-by-side' },
          { title: 'secondary', value: 'Stacked' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextSimple',
      group: 'hero',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'hero',
    }),
  ],
})