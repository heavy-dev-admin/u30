import Grid from 'components/Structure/Grid'
import Section from 'components/Structure/Section'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps } from 'next'

export default function Industries() {
  return (
    <Section>
      <Grid className="bg-cream text-dark-green relative pb-6 px-4 md:px-6.5">Industries Page</Grid>
    </Section>
  )
}

export const getStaticProps: GetStaticProps<SharedPageProps, Query> = getSharedStaticProps
