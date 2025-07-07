import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { getSharedStaticProps, PageProps, Query } from 'lib/shared-props'
import { GetStaticProps } from 'next'

export default function Page(props: PageProps) {
  const { settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage settings={settings} />
  }

  return <IndexPage settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = getSharedStaticProps
