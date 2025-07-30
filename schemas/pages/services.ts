import { ComposeIcon, SearchIcon, TiersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import seoPageField from 'schemas/fields/seoPage'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Services',
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
    seoPageField,
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
          name: 'serviceHeroBlocks',
          title: 'Service Hero Blocks',
          type: 'array',
          of: [{ type: 'serviceBlock' }],
        }),
      ],
    }),
    flexibleSectionsField,
  ],
})
