import { getAboutSettings, getClient } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import HeroAbout from 'sections/HeroAbout'
import type { AboutSettings } from 'types/pages'

type PageProps = SharedPageProps & { aboutSettings: AboutSettings }

export default function About(props: PageProps) {
  const { aboutSettings } = props
  const { hero, flexibleSections } = aboutSettings

  return (
    <div>
      <HeroAbout {...hero} />
      <FlexibleSections sections={flexibleSections} />
    </div>
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
