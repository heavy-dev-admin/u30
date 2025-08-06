import { DottedLineOne, DottedLineThree,DottedLineTwo, RocketShip } from 'components/Icons'
import { SanityImage } from 'components/SanityImage'
import Container from 'components/Structure/Container'
import Section from 'components/Structure/Section'
import type { TwoUpSectionSettings } from 'types/common'

export default function TwoUp(props: TwoUpSectionSettings) {
  const { title, subtitle, imageLeft, imageRight, textBubbleLeft, textBubbleRight } = props

  return (
    <Section className="w-full mt-14 mb-12 px-4 md:px-6.5 md:mt-17 md:mb-16">
      <Container>
        <h3 className="h3 text-left text-dark-green max-w-206.5 md:text-center md:mx-auto">
          {title}
        </h3>
        <div className="text-body pt-4 text-dark-green max-w-143 md:text-center md:mx-auto md:pt-5">
          {subtitle}
        </div>
        <div className="bg-pink relative overflow-hidden rounded-lg px-9 py-12 grid grid-cols-1 gap-7.5 mt-8 lg:mt-13.5 lg:grid-cols-2 lg:gap-10 lg:px-[8.6%] lg:py-[10%]">
          <div className="relative">
            <SanityImage
              asset={imageLeft}
              alt={imageLeft?.alt || title}
              className="size-full object-cover"
              maxWidth={557}
            />
            <div className='absolute -bottom-[33%] z-2 right-0 size-fit hidden lg:block bg-cream rounded-full text-dark-green px-4 py-4 xl:py-6 text-body-small font-bold before:absolute before:-top-0 before:-left-4 before:content-[""] before:w-7.5 before:h-7.5 before:bg-cream before:rounded-full after:absolute after:-top-1 after:-left-7 after:content-[""] after:w-4 after:h-4 after:bg-cream after:rounded-full'>
              {textBubbleLeft}
            </div>
            <DottedLineOne className="two-up__line--one" />
          </div>
          <div className="relative aspect-[390/220]">
            <SanityImage
              asset={imageRight}
              alt={imageRight?.alt || title}
              className="size-full object-cover"
              maxWidth={557}
            />
            <div className='absolute -top-[33%] left-[20%] size-fit hidden lg:block bg-cream rounded-full text-dark-green px-4 py-4 xl:py-6 text-body-small font-bold before:absolute before:-bottom-0 before:-left-5 before:content-[""] before:w-7.5 before:h-7.5 before:bg-cream before:rounded-full after:absolute after:bottom-0 after:-left-8 after:content-[""] after:w-4 after:h-4 after:bg-cream after:rounded-full'>
              {textBubbleRight}
            </div>
            <div className="two-up__svg-container absolute">
              <RocketShip className="two-up__rocket" />
              <DottedLineThree className="two-up__line--three" />
            </div>
            <DottedLineTwo className="two-up__line--two" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
