import { PortableTextParser } from 'components/PortableTextParser'
import Container from 'components/Structure/Container'
import Grid from 'components/Structure/Grid'
import Section from 'components/Structure/Section'
import type { CareerSettings } from 'types/pages'

export default function HeroSecondary(props: CareerSettings['hero']) {
  const { title, description, heroType } = props

  return (
    <Section className="px-4 pt-8 pb-4 md:px-6.5 md:pt-10">
      <Grid className="mb-12 lg:mb-5">
        <h1 className="h1 text-dark-green col-span-full lg:col-span-4 mb-6 lg:mb-8">{title}</h1>
        {description && (
          <PortableTextParser
            content={description}
            className="col-span-full lg:col-start-6 lg:col-span-4 text-body"
          />
        )}
      </Grid>
      {heroType === 'secondary' && (
        <Container className="w-full h-[219px] lg:h-[319px] flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-start">
          <div className="relative w-full h-full bg-light-green rounded-lg z-1 overflow-y-clip lg:h-auto lg:w-[40vw]">
            <div className="absolute p-4 w-[60%] bg-cream rounded-b-lg -top-4 -right-4 lg:w-[100%] lg:-top-4 lg:-right-[54%]">
              <div className="bg-green h-30 rounded-lg w-full lg:h-[176px]" />
              <div className="absolute top-4 -left-2 corner corner-top-right" />
              <div className="hidden absolute top-4 -right-2 corner corner-top-left lg:block" />
            </div>
            <div className="absolute bottom-19 right-0 corner corner-top-right lg:bottom-[119px]" />
          </div>
          <div className="hidden lg:block relative w-[40vw] h-full bg-pink rounded-lg overflow-hidden lg:h-auto">
            <div className="absolute bottom-[119px] left-0 corner corner-top-left" />
          </div>
          <div className="hidden bg-light-green rounded-lg w-[20vw] lg:block" />
        </Container>
      )}
    </Section>
  )
}
