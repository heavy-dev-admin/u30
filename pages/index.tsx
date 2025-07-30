import Seo from 'components/Seo'
import { getClient, getHomepageSettings } from 'lib/sanity.client'
import { buildMetadata } from 'lib/seo'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import FourRights from 'sections/FourRights'
import Hero from 'sections/Hero'
import type { HomepageSettings } from 'types/pages'

type PageProps = SharedPageProps & { homepageSettings: HomepageSettings }

export default function Page(props: PageProps) {
  const { homepageSettings, settings } = props
  const { hero, fourRights, flexibleSections, seoPage } = homepageSettings
  const meta = buildMetadata({ seoPage, globalSeo: settings.seo })
  return (
    <>
      <Seo {...meta} />
      <Hero {...hero} />
      <FourRights {...fourRights} />
      <FlexibleSections sections={flexibleSections} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const homepageSettings = await getHomepageSettings(client)

    return {
      props: {
        ...sharedProps.props,
        homepageSettings,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
