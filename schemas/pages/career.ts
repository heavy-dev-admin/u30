import { CaseIcon, ComposeIcon, SearchIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import flexibleSectionsField from 'schemas/fields/flexibleSections'
import seoPageField from 'schemas/fields/seoPage'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Career',
      }
    },
  },
  icon: CaseIcon,
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
      type: 'object',
      group: 'sections',
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
          name: 'heroType',
          title: 'Hero Type',
          type: 'string',
          initialValue: 'primary',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        }),
      ],
    }),
    flexibleSectionsField,
  ],
})
