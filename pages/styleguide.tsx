import StyleguideButtons from 'components/styleguide/StyleguideButtons'
import StyleguideClientLogos from 'components/styleguide/StyleguideClientLogos'
import StyleguideColor from 'components/styleguide/StyleguideColor'
import StyleguideGallery from 'components/styleguide/StyleguideGallery'
import StyleguideIcons from 'components/styleguide/StyleguideIcons'
import StyleguideTypography from 'components/styleguide/StyleguideTypography'
import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps } from 'next'

export default function Styleguide() {
  return (
    <div className="bg-cream text-dark-green relative pb-6 px-4 md:px-6.5">
      <StyleguideTypography />
      <StyleguideColor />
      <StyleguideButtons />
      <StyleguideGallery />
      <StyleguideIcons />
      <StyleguideClientLogos />
    </div>
  )
}

export const getStaticProps: GetStaticProps<SharedPageProps, Query> = getSharedStaticProps
