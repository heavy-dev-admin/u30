import { PortableTextParser } from 'components/PortableTextParser'
import Grid from 'components/Structure/Grid'
import Section from 'components/Structure/Section'
import { getClient, getGeneralPageSettings } from 'lib/sanity.client'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import FlexibleSections from 'sections/FlexibleSections'
import type { GeneralPageSettings } from 'types/pages'

type PageProps = SharedPageProps & { pageSettings: GeneralPageSettings }

export default function DynamicPage(props: PageProps) {
  const { pageSettings } = props
  const { flexibleSections, seoPage, title, body } = pageSettings

  return (
    <>
      <Section className="text-dark-green mb-21 lg:mb-25">
        <Grid>
          {title && (
            <h1 className="h3 col-span-full mb-6 lg:mb-10 lg:col-start-3 lg:col-span-6">{title}</h1>
          )}
          {body && (
            <div className="col-span-full lg:col-start-3 lg:col-span-6 text-body-small">
              <PortableTextParser content={body} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()
  const pages = await client.fetch(`*[_type == "page" && defined(slug.current)].slug.current`)

  const paths = pages.map((slug) => ({
    params: { slug: slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const { slug } = ctx.params || {}

    if (!slug || typeof slug !== 'string') {
      return { notFound: true }
    }

    const sharedProps = await getSharedStaticProps(ctx)
    const client = getClient()
    const pageSettings = await getGeneralPageSettings(client, slug)

    if (!pageSettings) {
      return { notFound: true }
    }

    return {
      props: {
        ...sharedProps.props,
        pageSettings,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
