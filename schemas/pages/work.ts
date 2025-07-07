import { ComposeIcon, SearchIcon, TiersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import { validateSlug } from 'schemas/utils/validateSlug'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Work',
      }
    },
  },
  icon: TiersIcon,
  groups: [
    {
      name: 'seoPage',
      title: 'SEO',
      icon: SearchIcon,
    },
    {
      default: true,
      name: 'sections',
      title: 'Sections',
      icon: ComposeIcon,
    },
  ],
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Title',
      group: 'seoPage',
      type: 'string',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description',
      group: 'seoPage',
      type: 'portableTextSimple',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      group: 'seoPage',
      type: 'slug',
      options: {
        source: 'seoTitle',
      },
      validation: validateSlug,
    }),
    defineField({
      name: 'seoShareImage',
      title: 'Share Image',
      group: 'seoPage',
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
    defineField({
      name: 'hero',
      description: 'Hero section settings',
      title: 'Hero section',
      group: 'sections',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'portableTextSimple',
        }),
        defineField({
          name: 'workHeroBlocks',
          title: 'Work Hero Blocks',
          type: 'array',
          of: [{ type: 'workBlock' }],
        }),
      ],
    }),
    flexibleSectionsField,
  ],
})
