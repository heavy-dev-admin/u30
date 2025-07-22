import { PortableTextParser } from 'components/PortableTextParser'
import { SanityImage } from 'components/SanityImage'
import type { AboutSettings } from 'types/pages'

export default function HeroAbout(props: AboutSettings['hero']) {
  const { title, description, image, layout } = props

  return (
    <section
      className={`flex flex-col items-start gap-12 px-4 pt-8 pb-4 md:px-6.5 md:pt-10 ${layout === 'primary' ? 'lg:flex-row lg:justify-between' : ''}`}
    >
      <div className="w-full max-w-171">
        <h2 className="h1 text-dark-green lg:text-5xl lg:leading-11.5 lg:-tracking-[0.96px]">
          {title}
        </h2>
        {description && (
          <PortableTextParser content={description} className="mt-6 text-body md:mt-8" />
        )}
      </div>
      <div className="w-full h-auto flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-end">
        <SanityImage
          asset={image}
          alt={image?.alt || title}
          className="w-full object-cover rounded-lg aspect-[5/4] lg:w-[40vw] lg:aspect-[7/5]"
        />
        {layout === 'secondary' && (
          <>
            <div className="hidden bg-green rounded-lg lg:w-93 xl:block 2xl:w-[25vw]" />
            <div className="relative w-full h-103 bg-light-green rounded-lg overflow-hidden lg:flex-1 lg:h-auto">
              <div className="absolute -bottom-4 -right-4 p-4 bg-cream rounded-lg rounded-tl-3xl">
                <div className="w-39.5 h-53 bg-pink rounded-lg 2xl:w-60 2xl:h-80" />
                <div className="absolute -top-2 right-4 corner corner-bottom-right" />
                <div className="absolute bottom-4 -left-2 corner corner-bottom-right" />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
