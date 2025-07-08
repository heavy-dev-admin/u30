import { defineType } from 'sanity'
import portableTextSimpleField from 'schemas/fields/portableTextSimple'

export default defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Rich Text Section',
      }
    },
  },
  fields: [portableTextSimpleField],
})
