import Seo from 'components/Seo'
import { getClient, getServicesSettings } from 'lib/sanity.client'
import { buildMetadata } from 'lib/seo'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import HeroWork from 'sections/HeroWork'
import type { ServicesSettings } from 'types/pages'

type PageProps = SharedPageProps & { workSettings: ServicesSettings }

export default function About(props: PageProps) {
  const { workSettings, settings } = props
  const { hero, flexibleSections, seoPage } = workSettings
  const meta = buildMetadata({ seoPage, globalSeo: settings.seo })

  return (
    <div>
      <Seo {...meta} />
      <HeroWork {...hero} />
      <FlexibleSections sections={flexibleSections} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const workSettings = await getServicesSettings(client)

    return {
      props: {
        ...sharedProps.props,
        workSettings,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
