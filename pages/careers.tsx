import { getCareersSettings, getClient } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import HeroSecondary from 'sections/HeroSecondary'
import type { CareersSettings } from 'types/pages'

type PageProps = SharedPageProps & { careersSettings: CareersSettings }

export default function Careers(props: PageProps) {
  const { careersSettings } = props
  const { hero } = careersSettings
  return <HeroSecondary {...hero} />
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const careersSettings = await getCareersSettings(client)

    return {
      props: {
        ...sharedProps.props,
        careersSettings,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
