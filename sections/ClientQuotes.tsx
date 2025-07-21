import { SanityImage } from 'components/SanityImage'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ClientQuoteSectionSettings, QuoteItem } from 'types/common'

function ClientQuoteItem(props: QuoteItem) {
  const { client, quote, attributor, title } = props

  return (
    <div className="relative w-full max-w-277 mx-auto">
      <div className="w-full flex flex-col gap-4.5 p-6.5 rounded-lg bg-light-green lg:h-[345px] lg:flex-row-reverse lg:gap-22 lg:pt-8 lg:px-9.5 lg:pb-9.5">
        <div className="w-25 h-11 shrink-0 lg:w-39 lg:h-17">
          <SanityImage
            asset={client.logo}
            alt={client?.logo?.alt || client.title}
            className="size-full object-contain"
          />
        </div>
        <p className="text-body text-dark-green lg:text-[26px] lg:leading-8.5">{quote}</p>
      </div>
      <div className="w-full mt-3.5 bg-cream rounded-lg rounded-tr-3xl lg:w-fit lg:absolute lg:-bottom-24.5 lg:-left-4 lg:mt-0 lg:p-4">
        <div className="w-full p-6.5 bg-beige rounded-lg text-dark-green lg:w-82 lg:h-35 lg:mt-0 lg:px-9.5 lg:py-8.5">
          <h4 className="text-body">{attributor}</h4>
          <p className="text-body lg:mt-4">{title}</p>
        </div>
        <div className="hidden absolute -top-2 left-4 corner corner-bottom-left lg:block"></div>
        <div className="hidden absolute bottom-24.5 -right-2 corner corner-bottom-left lg:block"></div>
      </div>
    </div>
  )
}

export default function ClientQuotes(props: ClientQuoteSectionSettings) {
  const { quotes } = props

  return (
    <section className="w-full pt-14 pb-15 px-4 bg-cream overflow-hidden md:px-6.5 lg:pb-38.5">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={12}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        className="!overflow-visible"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <ClientQuoteItem {...quote} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
