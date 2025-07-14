import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps } from 'next'

export default function Page(props: SharedPageProps) {
  const { settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage settings={settings} />
  }

  return <IndexPage settings={settings} />
}

export const getStaticProps: GetStaticProps<SharedPageProps, Query> = getSharedStaticProps
