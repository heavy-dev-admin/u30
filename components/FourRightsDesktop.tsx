import { SanityImage } from 'components/SanityImage'
import { ReactElement, useRef, useState } from 'react'
import { FourRightItem } from 'types/common'
import type { HomepageSettings } from 'types/pages'

export default function FourRightsDesktop(props: HomepageSettings['fourRights']) {
  const { sectionTitle, sectionSubtitle, rights } = props

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const contentRef = useRef(null)

  const renderBlock = (right: FourRightItem, index: number) => {
    const { label, emblem, backgroundColor } = right

    const image = (
      <SanityImage
        asset={emblem}
        alt={emblem?.alt || label}
        className="absolute top-0 left-0 object-contain w-22 h-20"
      />
    )
    const customStyle = { backgroundColor: backgroundColor?.hex || '#cee074' }
    let block: ReactElement | null = null

    if (index === 0) {
      block = (
        <div className="relative w-full h-48 rounded-lg" style={customStyle} key={index}>
          {image}
        </div>
      )
    } else if (index === 1) {
      block = (
        <div className="absolute bottom-24 -right-4 p-4 rounded-lg bg-dark-green z-1" key={index}>
          <div className="relative w-44 h-32 rounded-lg bg-green" style={customStyle}>
            {image}
          </div>
          <div className="absolute top-16 -left-2 corner corner-dark corner-top-right"></div>
          <div className="absolute -top-2 right-4 corner corner-dark corner-bottom-right"></div>
          <div className="absolute top-10 -left-2 corner corner-dark corner-bottom-right"></div>
          <div className="absolute -bottom-2 right-4 corner corner-dark corner-top-right"></div>
        </div>
      )
    } else if (index === 2) {
      block = (
        <div
          className="absolute bottom-52 right-0 w-75 h-46 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
        </div>
      )
    } else {
      block = (
        <div
          className="absolute bottom-102 right-0 w-51 h-25 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
        </div>
      )
    }

    return block
  }

  return (
    <div
      className="hidden justify-center items-center lg:gap-20 overflow-hidden lg:flex xl:gap-40"
      ref={contentRef}
    >
      <div className="relative flex flex-col justify-end w-97 min-h-127">
        {rights.map(renderBlock)}
      </div>
      <div className="w-120 xl:w-147">
        <div className="text-button text-cream">{sectionSubtitle}</div>
        <h2 className="h1 text-cream font-black mt-6">
          {sectionTitle}
          <span
            className="block"
            style={{ color: rights[activeIndex].backgroundColor?.hex || 'inherit' }}
          >
            {rights[activeIndex].label}
          </span>
        </h2>
        {rights[activeIndex].detail && (
          <p className="w-109 mt-10 text-body-large text-cream">{rights[activeIndex].detail}</p>
        )}
      </div>
    </div>
  )
}
