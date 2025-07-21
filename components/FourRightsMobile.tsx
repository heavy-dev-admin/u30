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
      className="flex flex-col gap-2 w-80 h-50 px-4 py-4.5 rounded-lg bg-light-green"
      style={customStyle}
    >
      <SanityImage asset={emblem} alt={emblem?.alt || label} className="size-13 object-contain" />
      <h3 className="h3 text-dark-green font-black">{label}</h3>
    </div>
  )
}

export default function FourRightsMobile(props: HomepageSettings['fourRights']) {
  const { sectionTitle, sectionSubtitle, rights } = props

  const [detail, setDetail] = useState<string>(rights[0]?.detail || '')

  const handleSlideChange = debounce((activeIndex: number) => {
    setDetail(rights[activeIndex]?.detail || '')
  }, DEBOUNCE_TIME)

  return (
    <div className="pt-12 pb-30 bg-dark-green lg:hidden">
      <div className="px-3 md:px-6.5">
        <div className="text-button text-cream">{sectionSubtitle}</div>
        <h2 className="h3 text-cream font-black mt-13 w-65 md:w-1/2">{sectionTitle}</h2>
      </div>
      <div className="mt-4 overflow-hidden">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={12}
          slidesPerView="auto"
          freeMode={{
            enabled: true,
            sticky: false,
            momentum: true,
          }}
          className="!overflow-visible !px-3 md:!px-6.5"
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        >
          {rights.map((right, index) => (
            <SwiperSlide key={index} className="!w-80">
              <RightCard {...right} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {detail && (
        <div className="mt-6 px-3 md:px-6.5">
          <p className="w-80 text-cream text-body-large transition-all duration-500 ease-in-out md:w-1/2">
            {detail}
          </p>
        </div>
      )}
    </div>
  )
}
