import IndexPage from 'components/IndexPage'
import { getClient, getHomepageSettings } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import type { HomepageSettings } from 'types/pages'

type PageProps = SharedPageProps & { homepageSettings: HomepageSettings }

export default function Page(props: PageProps) {
  const { homepageSettings } = props

  return <IndexPage {...homepageSettings} />
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  const sharedProps = await getSharedStaticProps(ctx)

  const client = getClient()
  const homepageSettings = await getHomepageSettings(client)

  return {
    props: {
      ...sharedProps.props,
      homepageSettings,
    },
  }
}
