import Head from 'next/head'

type Props = {
  title: string
  description: string
  openGraph?: {
    images?: { url: string; alt?: string }[]
  }
}

export default function Seo({ title, description, openGraph }: Props) {
  const pageTitle = title === 'U30' ? 'Home' : title

  return (
    <Head>
      <title>{`U30 · ${pageTitle}`}</title>
      {/* to do: remove before launch */}
      <meta name="X-robots-tag" content="noindex, nofollow" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {openGraph?.images?.[0]?.url && (
        <meta property="og:image" content={openGraph.images[0].url} />
      )}
      {openGraph?.images?.[0]?.alt && (
        <meta property="og:image:alt" content={openGraph.images[0].alt} />
      )}
    </Head>
  )
}
