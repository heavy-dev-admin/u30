import { getClient, getHomepageSettings } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import FourRights from 'sections/FourRights'
import Hero from 'sections/Hero'
import type { HomepageSettings } from 'types/pages'

type PageProps = SharedPageProps & { homepageSettings: HomepageSettings }

export default function Page(props: PageProps) {
  const { homepageSettings } = props
  const { hero, fourRights, flexibleSections } = homepageSettings

  return (
    <div>
      <Hero {...hero} />
      <FourRights {...fourRights} />
      <FlexibleSections {...flexibleSections} />
    </div>
  )
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
