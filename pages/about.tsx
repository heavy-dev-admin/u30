import Seo from 'components/Seo'
import { getAboutSettings, getClient } from 'lib/sanity.client'
import { buildMetadata } from 'lib/seo'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import HeroAbout from 'sections/HeroAbout'
import type { AboutSettings } from 'types/pages'

type PageProps = SharedPageProps & { aboutSettings: AboutSettings }

export default function About(props: PageProps) {
  const { aboutSettings, settings } = props
  const { hero, flexibleSections, seoPage } = aboutSettings
  const meta = buildMetadata({ seoPage, globalSeo: settings.seo })

  return (
    <>
      <Seo {...meta} />
      <HeroAbout {...hero} />
      <FlexibleSections sections={flexibleSections} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const aboutSettings = await getAboutSettings(client)

    return {
      props: {
        ...sharedProps.props,
        aboutSettings,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
