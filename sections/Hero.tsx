import { SanityImage } from 'components/SanityImage'
import Grid from 'components/Structure/Grid'
import Section from 'components/Structure/Section'
import type { HomepageSettings } from 'types/pages'

export default function Hero(props: HomepageSettings['hero']) {
  const { title, subtitle, heroImage } = props

  return (
    <Section>
      <Grid className="mx-auto w-full flex flex-col pt-10 pb-3.5 bg-cream gap-12.5 lg:flex-row lg:justify-between lg:items-center lg:gap-[66px] lg:pt-10 lg:pb-16">
        <div className="col-span-full lg:col-span-4">
          <h2 className="h1 font-black text-dark-green">{title}</h2>
          <p className="mt-4 text-body font-medium text-dark-green lg:mt-10 lg:text-[26px] lg:leading-8.5">
            {subtitle}
          </p>
        </div>
        <div className="col-span-full flex justify-end items-end gap-4 lg:col-span-6 lg:col-start-5">
          <div className="hidden rounded-full bg-pink size-55 xl:block" />
          <div className="w-full h-84 overflow-hidden md:h-120 lg:w-136 lg:h-[506px]">
            <div className="relative size-full aspect-square bg-light-green rounded-lg">
              <div className="absolute -top-3 -left-3 p-3 bg-cream rounded-lg rounded-br-3xl md:-top-4 md:-left-4 md:p-4">
                <SanityImage
                  asset={heroImage}
                  alt={heroImage.alt || title}
                  priority
                  maxWidth={322}
                  className="w-54 aspect-[6/5] object-cover rounded-lg md:w-81"
                />
                <div className="absolute top-3 -right-2 corner corner-top-left md:top-4" />
              </div>
              <div className="absolute -bottom-3 -left-3 p-3 bg-cream rounded-lg h-[calc(100%-168px)] md:h-[calc(100%-254px)] md:-bottom-4 md:-left-4 md:p-4">
                <div className="w-[118px] h-full bg-green rounded-lg md:w-43" />
                <div className="absolute top-3 -right-2 corner corner-top-left md:top-4" />
                <div className="absolute bottom-3 -right-2 corner corner-bottom-left md:bottom-4" />
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Section>
  )
}
