import { getCareerSettings, getClient } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import HeroSecondary from 'sections/HeroSecondary'
import type { CareerSettings } from 'types/pages'

type PageProps = SharedPageProps & { careerSettings: CareerSettings }

export default function Careers(props: PageProps) {
  const { careerSettings } = props
  const { hero } = careerSettings
  return <HeroSecondary {...hero} />
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const careerSettings = await getCareerSettings(client)

    return {
      props: {
        ...sharedProps.props,
        careerSettings,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
