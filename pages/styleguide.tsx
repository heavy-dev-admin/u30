import StyleguideButtons from 'components/Styleguide/StyleguideButtons'
import StyleguideClientLogos from 'components/Styleguide/StyleguideClientLogos'
import StyleguideColor from 'components/Styleguide/StyleguideColor'
import StyleguideGallery from 'components/Styleguide/StyleguideGallery'
import StyleguideIcons from 'components/Styleguide/StyleguideIcons'
import StyleguideTypography from 'components/Styleguide/StyleguideTypography'
import { getSharedStaticProps, PageProps, Query } from 'lib/shared-props'
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

export const getStaticProps: GetStaticProps<PageProps, Query> = getSharedStaticProps