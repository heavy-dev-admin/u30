import { toPlainText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { urlForImage } from 'lib/sanity.image'
import type { GlobalSeoType,SeoPageType } from 'types/common'

export function buildMetadata({
  seoPage,
  globalSeo,
}: {
  seoPage?: SeoPageType
  globalSeo?: GlobalSeoType
}) {
  const title = seoPage?.title || globalSeo.siteTitle
  const description = seoPage?.description
    ? toPlainText(seoPage.description as PortableTextBlock[])
    : globalSeo.description
  const imageRef = seoPage?.shareImage?.asset || globalSeo.shareImage?.asset
  const imageAlt = seoPage?.shareImage?.alt || globalSeo.shareImage?.alt || ''

  let ogImageUrl: string

  if (imageRef) ogImageUrl = urlForImage(imageRef).url()

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              alt: imageAlt,
            },
          ]
        : [],
    },
  }
}
