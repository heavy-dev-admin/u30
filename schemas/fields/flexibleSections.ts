import { defineArrayMember, defineField } from 'sanity'

export default defineField({
  name: 'flexibleSections',
  title: 'Flexible Sections',
  type: 'array',
  group: 'sections',
  of: [
    defineArrayMember({
      type: 'reference',
      to: [
        { type: 'clientsSection' },
        { type: 'clientQuotesSection' },
        { type: 'twoUpSection' },
        { type: 'richTextSection' },
        { type: 'simpleCtaSection' },
      ],
    }),
  ],
})
