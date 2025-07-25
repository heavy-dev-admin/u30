import IndustryCard from 'components/IndustryCard'
import { PortableTextParser } from 'components/PortableTextParser'
import Grid from 'components/Structure/Grid'
import Section from 'components/Structure/Section'
import { getClient, getIndustriesSettings } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import type { IndustriesSettings } from 'types/pages'

type PageProps = SharedPageProps & { industriesSettings: IndustriesSettings }

export default function About(props: PageProps) {
  const { industriesSettings } = props
  const { hero, flexibleSections, industries, seoPage } = industriesSettings

  return (
    <>
      <Section className="pt-10">
        <Grid className="bg-cream relative">
          {hero && (
            <div className="col-span-full text-dark-green mb-14 lg:mb-0 lg:col-span-5 lg:pr-30 ">
              {hero.title && <h1 className="h3">{hero.title}</h1>}
              {hero.description && (
                <h2 className="text-body">
                  <PortableTextParser
                    content={hero.description}
                    className="mt-6 text-body md:mt-8"
                  />
                </h2>
              )}
            </div>
          )}
          {industries && Array.isArray(industries) && industries.length > 0 && (
            <div className="col-span-full lg:col-span-5">
              {industries.map((industry, i) => (
                <IndustryCard key={industry._key} industry={industry} index={i} />
              ))}
            </div>
          )}
        </Grid>
      </Section>
      {flexibleSections && (
        <Section>
          <FlexibleSections sections={flexibleSections} />
        </Section>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    const client = getClient()
    const industriesSettings = await getIndustriesSettings(client)

    return {
      props: {
        ...sharedProps.props,
        industriesSettings,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
