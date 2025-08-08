import { SanityImage } from 'components/SanityImage'
import { DEBOUNCE_TIME } from 'constant'
import { useState } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FourRightItem } from 'types/common'
import type { HomepageSettings } from 'types/pages'
import { debounce } from 'utils/common'

function RightCard(props: FourRightItem) {
  const { label, emblem, backgroundColor } = props

  const customStyle = backgroundColor ? { backgroundColor: backgroundColor.hex } : {}

  return (
    <div
      className="flex flex-col justify-end gap-0 w-full h-40 px-4 py-4.5 rounded-lg bg-light-green"
      style={customStyle}
    >
      <div className="relative size-20">
        <SanityImage
          asset={emblem}
          alt={emblem?.alt || label}
          className="absolute object-contain -left-4 -bottom-1"
        />
      </div>
      <h3 className="h3 text-dark-green font-black">{label}</h3>
    </div>
  )
}

export default function FourRightsMobile(props: HomepageSettings['fourRights']) {
  const { sectionTitle, sectionSubtitle, rights } = props

  const [detail, setDetail] = useState<string>(rights[0]?.detail || '')

  const handleSlideChange = debounce((progess: number) => {
    const activeIndex = Math.round(progess * (rights.length - 1))

    setDetail(rights[activeIndex]?.detail || '')
  }, DEBOUNCE_TIME)

  return (
    <section className="pt-20 pb-30 bg-dark-green block mb-12 md:hidden min-h-[637px]">
      <div className="px-4 md:px-6.5">
        <div className="text-button text-cream">{sectionSubtitle}</div>
        <h2 className="h3 text-cream font-black mt-13 w-3/4 md:w-1/2">{sectionTitle}</h2>
      </div>
      <div className="mt-4 overflow-hidden">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={12}
          slidesPerView="auto"
          freeMode={{
            enabled: false,
            sticky: false,
          }}
          className="!overflow-visible !px-4 md:!px-6.5"
          onSliderMove={(swiper) => handleSlideChange(swiper.progress)}
        >
          {rights.map((right, index) => (
            <SwiperSlide
              key={index}
              className={`!w-[86.4%] !max-w-300px ${index === rights.length - 1 ? 'mr-[calc(100%-86.4%)]' : ''}`}
            >
              <RightCard {...right} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {detail && (
        <div className="relative w-full mt-6 px-4 md:px-6.5">
          <p
            key={detail}
            className="absolute text-cream text-body-large animate-in fade-in duration-500 ease-in-out md:w-1/2"
          >
            {detail}
          </p>
        </div>
      )}
    </section>
  )
}
