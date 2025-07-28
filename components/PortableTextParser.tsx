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
  list: {
    bullet: ({ children }) => (
      <ul className="ml-2 mt-3 list-inside list-disc lg:mt-5.5 lg:mb-5">{children}</ul>
    ),
    number: ({ children }) => <ol className="list-inside list-decimal mb-5 lg:mb-5">{children}</ol>,
  },
  listItem: {
    li: ({ children }) => <li className="mb-2 lg:mb-2">{children}</li>,
  },
  block: {
    normal: ({ children }) => {
      return <p className="text-body-small">{children}</p>
    },
    body: ({ children }) => {
      return <p className="text-body">{children}</p>
    },
    bodyLarge: ({ children }) => {
      return <p className="text-body-large">{children}</p>
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
