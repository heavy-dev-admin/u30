import { SanityImage } from 'components/SanityImage'
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { FourRightItem } from 'types/common'
import type { HomepageSettings } from 'types/pages'

export default function FourRightsDesktop(props: HomepageSettings['fourRights']) {
  const { sectionTitle, sectionSubtitle, rights } = props

  const EASE = [0.25, 0.1, 0.25, 1] as const

  const ANIMATED_INITIAL = { opacity: 0, y: -150 }
  const ANIMATED_INITIAL_ALT = { opacity: 0, y: 10 }
  const ANIMATED_TARGET = { opacity: 1, y: 0 }

  const ANIMATED_TRANSITION = {
    duration: 0.6,
    ease: EASE,
  }

  const ANIMATED_TRANSITION_TITLE = {
    duration: 0.6,
    ease: EASE,
    delay: 0.2,
  }

  const ANIMATED_TRANSITION_COPY = {
    duration: 0.6,
    ease: EASE,
    delay: 0.4,
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const containerRef = useRef(null)
  const scrollContainerRef = useRef(null)

  const renderBlock = (right: FourRightItem, index: number): ReactElement | null => {
    if (activeIndex === null || activeIndex < index) return null

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
          className="four-rights__first relative w-full h-48 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
          <div className="absolute top-2 bottom-0 my-auto right-0 corner corner-dark corner-top-right bg-light-green" />
          <div className="absolute top-0 right-1 left-0 mx-auto corner corner-dark corner-top-right bg-light-green" />
        </motion.div>
      )
    } else if (index === 1) {
      return (
        <motion.div
          initial={ANIMATED_INITIAL}
          animate={ANIMATED_TARGET}
          transition={ANIMATED_TRANSITION}
          exit={ANIMATED_INITIAL}
          className=" absolute bottom-24 -right-4 p-4 rounded-lg rounded-l-3xl bg-dark-green z-1"
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
          className="four-rights__third absolute bottom-52 right-0 w-75 h-46 rounded-lg"
          style={customStyle}
          key={index}
        >
          {image}
          <div className="absolute top-0 -bottom-20 my-auto right-0 corner corner-dark corner-bottom-right bg-pink" />
          <div className="absolute bottom-0 z-1 right-[64%] corner corner-dark corner-bottom-right bg-pink" />
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
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const updateScrollHeight = () => {
      if (window.innerWidth >= 768) {
        scrollContainer.style.height = '300vh'
      } else {
        scrollContainer.style.height = 'auto'
      }
    }

    updateScrollHeight()
    window.addEventListener('resize', updateScrollHeight)

    return () => {
      window.removeEventListener('resize', updateScrollHeight)
    }
  }, [rights.length])

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start', 'end'],
  })

  const indexFromScroll = useTransform(scrollYProgress, (v) => {
    if (v === 0) return null

    const i = v > 0 && v < 0.24 ? 0 : Math.ceil(v * rights.length) - 1

    return Math.max(0, Math.min(rights.length - 1, i))
  })

  const contentY = useMotionValue(-100)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0 && contentY.get() !== 0) {
      animate(contentY, 0, {
        duration: 0.4,
        ease: 'easeOut',
      })
    } else if (v <= 0 && contentY.get() !== -100) {
      animate(contentY, -100, {
        duration: 0.4,
        ease: 'easeOut',
      })
    }
  })

  useMotionValueEvent(indexFromScroll, 'change', (latest) => {
    setActiveIndex(latest)
  })

  return (
    <div ref={scrollContainerRef} className="relative hidden md:block mb-12">
      <div
        className="hidden h-screen sticky top-0 justify-center items-center overflow-hidden bg-dark-green md:gap-4 lg:gap-20 md:py-[134px] md:flex xl:gap-40"
        ref={containerRef}
      >
        <div className="relative flex flex-col justify-end w-1/2 ml-4 lg:ml-0 lg:w-97 min-h-127">
          <AnimatePresence>{rights.map(renderBlock)}</AnimatePresence>
        </div>
        <div className="h-full flex items-center w-1/2 mr-4 lg:mr-0 lg:w-auto">
          {/* Animated container that moves from top to center based on scroll */}
          <motion.div
            className="lg:w-120 xl:w-147"
            style={{
              y: contentY,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          >
            <div className="text-button text-cream">{sectionSubtitle}</div>
            <h2 className="h1 text-cream font-black mt-6">
              {sectionTitle}
              <motion.span
                key={activeIndex}
                initial={ANIMATED_INITIAL_ALT}
                animate={ANIMATED_TARGET}
                transition={ANIMATED_TRANSITION_TITLE}
                className="block mb-10"
                style={{
                  color: rights[activeIndex]?.backgroundColor?.hex || 'inherit',
                  minHeight: '1em',
                }}
              >
                {rights[activeIndex]?.label}
              </motion.span>
            </h2>
            <div className="min-h-28">
              {rights[activeIndex]?.detail && (
                <motion.p
                  key={activeIndex}
                  initial={ANIMATED_INITIAL_ALT}
                  animate={ANIMATED_TARGET}
                  transition={ANIMATED_TRANSITION_COPY}
                  className="lg:w-109 text-body-large text-cream"
                >
                  {rights[activeIndex]?.detail}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
