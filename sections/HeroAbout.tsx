import { PortableTextParser } from 'components/PortableTextParser'
import { SanityImage } from 'components/SanityImage'
import Container from 'components/Structure/Container'
import Grid from 'components/Structure/Grid'
import Section from 'components/Structure/Section'
import type { AboutSettings } from 'types/pages'

export default function HeroAbout(props: AboutSettings['hero']) {
  const { title, description, image, layout } = props

  return (
    <Section
      className={`flex flex-col items-start gap-12 pt-8 pb-4 md:pt-10 lg:gap-5 ${layout === 'primary' ? 'lg:flex-row lg:justify-between' : ''}`}
    >
      <Grid>
        <div className="col-span-full lg:col-span-5">
          <h1 className="h1 text-dark-green mb-6 lg:mb-8">{title}</h1>
          {description && <PortableTextParser content={description} className="text-body" />}
        </div>
      </Grid>
      <Container className="w-full h-auto flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-end">
        {layout === 'secondary' && (
          <>
            <SanityImage
              asset={image}
              alt={image?.alt || title}
              className="w-full object-cover rounded-lg aspect-[5/4] lg:w-[40vw] lg:aspect-[7/5] lg:max-w-[576px]"
            />
            <div className="hidden bg-green rounded-lg lg:w-93 xl:block max-w-[373px]" />
            <div className="relative w-full h-103 bg-light-green rounded-lg overflow-hidden lg:flex-1 lg:h-auto">
              <div className="absolute -bottom-4 -right-4 p-4 bg-cream rounded-lg rounded-tl-3xl">
                <div className="w-39.5 h-53 bg-pink rounded-lg" />
                <div className="absolute -top-2 right-4 corner corner-bottom-right" />
                <div className="absolute bottom-4 -left-2 corner corner-bottom-right" />
              </div>
            </div>
          </>
        )}
      </Container>
    </Section>
  )
}
