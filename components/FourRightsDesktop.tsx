import { SanityImage } from 'components/SanityImage'
import { THROTTLE_TIME } from 'constant'
import { AnimatePresence, motion } from 'motion/react'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { FourRightItem } from 'types/common'
import type { HomepageSettings } from 'types/pages'
import { throttle } from 'utils/common'

import Section from './Structure/Section'

export default function FourRightsDesktop(props: HomepageSettings['fourRights']) {
  const { sectionTitle, sectionSubtitle, rights } = props

  const SCROLL_PROGRESS_THRESHOLD = 0.6
  const ANIMATED_INITIAL = { opacity: 0, y: -40 }
  const ANIMATED_INITIAL_ALT = { opacity: 0, y: 40 }
  const ANIMATED_TARGET = { opacity: 1, y: 0 }
  const ANIMATED_TRANSITION = { duration: 0.3 }
  const ANIMATED_TRANSITION_ALT = { duration: 0.3, delay: 0.25 }

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const containerRef = useRef(null)

  const renderBlock = (right: FourRightItem, index: number): ReactElement | null => {
    if (activeIndex < index) return null

    const { label, emblem, backgroundColor } = right

    const image = (
      <SanityImage
        asset={emblem}
        alt={emblem?.alt || label}
        maxWidth={90}
        className="absolute top-0 left-0 object-contain w-22 h-20"
      />
    )
    const customStyle = { backgroundColor: backgroundColor?.hex || '#cee074' }

    if (index === 0) {
      return (
        <motion.div
          initial={ANIMATED_INITIAL}
          animate={ANIMATED_TARGET}
          transition={ANIMATED_TRANSITION}
          exit={ANIMATED_INITIAL}
          className="relative w-full h-48 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
        </motion.div>
      )
    } else if (index === 1) {
      return (
        <motion.div
          initial={ANIMATED_INITIAL}
          animate={ANIMATED_TARGET}
          transition={ANIMATED_TRANSITION}
          exit={ANIMATED_INITIAL}
          className="absolute bottom-24 -right-4 p-4 rounded-lg rounded-l-3xl bg-dark-green z-1"
          key={index}
        >
          <div className="relative w-44 h-32 rounded-lg bg-green" style={customStyle}>
            {image}
          </div>
          <div className="absolute top-16 -left-2 corner corner-dark corner-top-right" />
          <div className="absolute -top-2 right-4 corner corner-dark corner-bottom-right" />
          <div className="absolute top-10 -left-2 corner corner-dark corner-bottom-right" />
          <div className="absolute -bottom-2 right-4 corner corner-dark corner-top-right" />
        </motion.div>
      )
    } else if (index === 2) {
      return (
        <motion.div
          initial={ANIMATED_INITIAL}
          animate={ANIMATED_TARGET}
          transition={ANIMATED_TRANSITION}
          exit={ANIMATED_INITIAL}
          className="absolute bottom-52 right-0 w-75 h-46 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
        </motion.div>
      )
    } else if (index === 3) {
      return (
        <motion.div
          initial={ANIMATED_INITIAL}
          animate={ANIMATED_TARGET}
          transition={ANIMATED_TRANSITION}
          exit={ANIMATED_INITIAL}
          className="absolute bottom-102 right-0 w-51 h-25 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
        </motion.div>
      )
    }

    return null
  }

  useEffect(() => {
    const section: HTMLElement | null = containerRef.current?.parentElement
    if (!section) return

    const updateSectionHeight = () => {
      if (window.innerWidth >= 1024)
        section.style.height = `${3 * containerRef.current.offsetHeight}px`
      else section.style.height = 'auto'
    }

    const handleScroll = throttle(() => {
      if (!containerRef.current) return

      const sectionRect = section.getBoundingClientRect()

      if (sectionRect.top <= 0 && sectionRect.bottom >= window.innerHeight) {
        const scrollProgress: number = Math.abs(sectionRect.top) / sectionRect.height
        const clampedProgress: number = Math.max(
          0,
          Math.min(SCROLL_PROGRESS_THRESHOLD, scrollProgress)
        )
        const contentIndex: number = Math.floor(
          (clampedProgress * (rights.length - 1)) / SCROLL_PROGRESS_THRESHOLD
        )

        setActiveIndex(contentIndex)
      }
    }, THROTTLE_TIME)

    handleScroll()
    updateSectionHeight()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateSectionHeight)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateSectionHeight)
    }
  }, [rights.length])

  return (
    <div
      className={`hidden h-screen sticky top-0 justify-center items-center overflow-hidden bg-dark-green lg:gap-20 lg:py-[134px] lg:flex xl:gap-40`}
      ref={containerRef}
    >
      <div className="relative flex flex-col justify-end w-97 min-h-127">
        <AnimatePresence>{rights.map(renderBlock)}</AnimatePresence>
      </div>
      <div className="w-120 xl:w-147">
        <div className="text-button text-cream">{sectionSubtitle}</div>
        <h2 className="h1 text-cream font-black mt-6">
          {sectionTitle}
          <motion.span
            key={activeIndex}
            initial={ANIMATED_INITIAL_ALT}
            animate={ANIMATED_TARGET}
            transition={ANIMATED_TRANSITION_ALT}
            className="block"
            style={{ color: rights[activeIndex].backgroundColor?.hex || 'inherit' }}
          >
            {rights[activeIndex].label}
          </motion.span>
        </h2>
        {rights[activeIndex].detail && (
          <motion.p
            key={activeIndex}
            initial={ANIMATED_INITIAL_ALT}
            animate={ANIMATED_TARGET}
            transition={ANIMATED_TRANSITION_ALT}
            className="w-109 min-h-28 mt-10 text-body-large text-cream"
          >
            {rights[activeIndex].detail}
          </motion.p>
        )}
      </div>
    </div>
  )
}
