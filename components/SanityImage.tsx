import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from 'lib/sanity.client'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

interface Props {
  asset: SanityImageSource
  alt: string
  className?: string
  priority?: boolean
  layoutSwitch?: number
  maxWidth?: number
}

export const SanityImage = ({
  asset,
  alt,
  className,
  priority,
  layoutSwitch = 768,
  maxWidth = 800,
}: Props) => {
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset)

  if (!imageProps) return null

  return (
    <figure>
      <Image
        {...imageProps}
        alt={alt}
        sizes={`(max-width: ${layoutSwitch}px) 100vw, ${maxWidth}px`}
        className={className}
        priority={priority}
      />
    </figure>
  )
}
