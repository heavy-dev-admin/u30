import { PortableText } from '@portabletext/react'
import { PortableTextSimpleBlock } from 'types/common'

export function PortableTextParser({
  content,
  className,
}: {
  content: PortableTextSimpleBlock[]
  className?: string
}) {
  if (!content || content.length === 0) {
    return null
  }

  return (
    <div className={`wysiwyg ${className || ''}`}>
      <PortableText value={content} />
    </div>
  )
}
