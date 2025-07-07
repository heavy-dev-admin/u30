import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { GetStaticPropsContext } from 'next'
import { SharedPageProps } from 'pages/_app'
import { Settings } from 'types/settings'

export interface PageProps extends SharedPageProps {
  settings: Settings
}

export interface Query {
  [key: string]: string
}

export async function getSharedStaticProps(
  ctx: GetStaticPropsContext<Query>
) {
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
