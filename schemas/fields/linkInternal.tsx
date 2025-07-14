import { LinkIcon } from '@sanity/icons'
import { PAGE_REFERENCES } from 'constant'
import { defineField } from 'sanity'

export default defineField({
  name: 'linkInternal',
  title: 'Internal Link',
  type: 'reference',
  components: {
    annotation: (props: any) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  validation: (rule) => rule.required(),
  to: PAGE_REFERENCES,
  options: {
    disableNew: true,
  },
})
