'use client'

import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { urlForImage } from 'lib/sanity.image' // update this to your own image builder
import { useEffect, useState } from 'react'

interface InlineSVGProps {
  asset: SanityImageSource
  className?: string
  fill?: string
}

export default function InlineSVG({ asset, className, fill = 'currentColor' }: InlineSVGProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null)

  useEffect(() => {
    const fetchSVG = async () => {
      const url = urlForImage(asset).url()
      const res = await fetch(url)
      const text = await res.text()

      const sanitized = text
        .replace(/fill=".*?"/g, '')
        .replace(/<svg([^>]*)>/, `<svg$1 fill="${fill}">`)
      setSvgContent(sanitized)
    }

    fetchSVG()
  }, [asset, fill])

  if (!svgContent) return null

  const isPatternedImage =
    svgContent.includes('<pattern') || svgContent.includes('xlink:href="data:image')

  return (
    <>
      {isPatternedImage ? (
        //eslint-disable-next-line
        <img src={urlForImage(asset).url()} alt="Fallback image" className={className} />
      ) : (
        <div
          className={className}
          style={{ color: fill }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </>
  )
}
