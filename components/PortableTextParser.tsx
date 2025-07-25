import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextSimpleBlock } from 'types/common'

const components: PortableTextComponents = {
  marks: {
    linkExternal: ({ children, value }) => {
      const url = value?.url || '#'
      const isMailto = url.startsWith('mailto:')
      const isNewWindow = value?.newWindow && !isMailto

      return (
        <a
          href={url}
          className="link-external"
          target={isNewWindow ? '_blank' : undefined}
          rel={isNewWindow ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
  },
}

export function PortableTextParser({
  content,
  className,
}: {
  content: PortableTextSimpleBlock[]
  className?: string
}) {
  if (!content || content.length === 0) return null

  return (
    <div className={`wysiwyg ${className || ''}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}
