import { getClient, getWorkSettings } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import HeroWork from 'sections/HeroWork'
import type { WorkSettings } from 'types/pages'

type PageProps = SharedPageProps & { workSettings: WorkSettings }

export default function About(props: PageProps) {
  const { workSettings } = props
  const { hero, flexibleSections } = workSettings

  return (
    <div>
      <HeroWork {...hero} />
      <FlexibleSections sections={flexibleSections} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const workSettings = await getWorkSettings(client)

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
