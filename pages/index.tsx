import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import { Settings } from 'types/settings'

interface PageProps extends SharedPageProps {
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage settings={settings} />
  }

  return <IndexPage settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const settings = await getSettings(client)

  return {
    props: {
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
