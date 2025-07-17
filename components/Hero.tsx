import { SanityImage } from 'components/SanityImage'
import type { HomepageSettings } from 'types/pages'

export default function Hero({ hero }: Pick<HomepageSettings, 'hero'>) {
  return (
    <div className="flex flex-col px-3 py-10 bg-cream gap-12.5 lg:flex-row lg:justify-between lg:items-center lg:gap-[66px] lg:px-6.5 lg:pt-0 lg:pb-6.5">
      <div className="max-w-136 px-1 lg:px-0">
        <h2 className="h1 font-black text-dark-green">{hero.title}</h2>
        <p className="mt-4 text-body font-medium text-dark-green lg:mt-10 lg:text-[26px] lg:leading-8.5">
          {hero.subtitle}
        </p>
      </div>
      <div className="flex justify-end items-end gap-4">
        <div className="hidden rounded-full bg-pink size-55 xl:block"></div>
        <div className="w-full h-84 overflow-hidden md:h-120 lg:w-136 lg:h-[506px]">
          <div className="relative size-full aspect-square bg-light-green rounded-lg">
            <div className="absolute -top-3 -left-3 p-3 bg-cream rounded-lg md:-top-4 md:-left-4 md:p-4">
              <SanityImage
                asset={hero.heroImage}
                alt={hero.heroImage.alt || hero.title}
                className="w-54 aspect-[6/5] object-cover rounded-lg md:w-81"
              />
              <div className="absolute top-3 -right-2 corner corner-top-left md:top-4"></div>
            </div>
            <div className="absolute -bottom-3 -left-3 p-3 bg-cream rounded-lg h-[calc(100%-168px)] md:h-[calc(100%-254px)] md:-bottom-4 md:-left-4 md:p-4">
              <div className="w-[118px] h-full bg-green rounded-lg md:w-43"></div>
              <div className="absolute top-3 -right-2 corner corner-top-left md:top-4"></div>
              <div className="absolute bottom-3 -right-2 corner corner-bottom-left md:bottom-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
