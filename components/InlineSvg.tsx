'use client'

import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { urlForImage } from 'lib/sanity.image'
import { useEffect, useState } from 'react'

interface InlineSVGProps {
  asset: SanityImageSource
  className?: string
  fill?: string
  adjustedWidth?: number | undefined
}

export default function InlineSVG({
  asset,
  className,
  fill = 'currentColor',
  adjustedWidth = 100,
}: InlineSVGProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null)

  useEffect(() => {
    const fetchSVG = async () => {
      const url = urlForImage(asset).url()
      const res = await fetch(url)
      const text = await res.text()

      const sanitized = text
        .replace(/fill=".*?"/g, '')
        .replace(/<svg([^>]*)>/, `<svg$1 fill="${fill}">`)
        .replace(/\s(width|height)="[^"]*"/g, '')
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
        <div>
          <img src={urlForImage(asset).url()} alt="Fallback image" className={className} />
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <div
            className={className}
            style={{ color: fill, width: `${adjustedWidth}%` }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </div>
      )}
    </>
  )
}
