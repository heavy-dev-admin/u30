import clsx from 'clsx'
import { PortableTextParser } from 'components/PortableTextParser'
import { SanityImage } from 'components/SanityImage'
import Container from 'components/Structure/Container'
import Section from 'components/Structure/Section'
import { animate,AnimatePresence, motion, useMotionValue } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ServiceBlockItem } from 'types/common'
import type { ServicesSettings } from 'types/pages'

type WorkBlockProps = {
  block: ServiceBlockItem
  className?: string
  minHeight?: number
  textAlignment?: 'center' | 'bottom'
}

function TextBlock({
  block,
  className,
  minHeight = 190,
  textAlignment = 'bottom',
}: WorkBlockProps) {
  const bg = useMotionValue(block.backgroundColor?.hex || '#ffffff')
  const textColor = block.textColor?.hex
  const { logoSize } = block

  useEffect(() => {
    animate(bg, block.backgroundColor?.hex || '#ffffff', {
      duration: 0.6,
      ease: 'easeInOut',
    })
  }, [bg, block.backgroundColor?.hex])

  return (
    <motion.div
      className={`flex relative flex-col rounded-lg p-6 lg:min-h-0 lg:p-4 xl:p-8 justify-end ${className}`}
      style={{ backgroundColor: bg, color: textColor, minHeight }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={block.slug?.current || block.title}
          className={clsx('lg:my-0', textAlignment === 'center' ? 'my-auto' : 'mt-auto')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {block.icon && (
            <div className="w-15 mb-3">
              <SanityImage
                asset={block.icon}
                alt={block.title || block.slug?.current}
                maxWidth={80}
                style={{ width: `${logoSize}%` }}
              />
            </div>
          )}
          <h3 className="h3h4 text-inherit">{block.title}</h3>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

function ImageOnlyBlock({
  block,
  className = '',
}: {
  block: ServiceBlockItem
  className?: string
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${block.slug?.current}-${block.reference}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative ${className}`}
      >
        <SanityImage
          asset={block.image}
          alt={block.title || block.slug?.current}
          className="size-full object-cover rounded-lg"
          priority
          maxWidth={545}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default function HeroWorkSection(props: ServicesSettings['hero']) {
  const { title, description, serviceHeroBlocks } = props

  const originalBlocks = serviceHeroBlocks.filter((b) => b.location === 'services')
  const modifiedBlocks = serviceHeroBlocks.filter((b) => b.location === 'services-2' && b.reference)

  const useSwappableBlocks = (originals: ServiceBlockItem[], modified: ServiceBlockItem[]) => {
    const [blocks, setBlocks] = useState<ServiceBlockItem[]>(originals)
    const blocksRef = useRef<ServiceBlockItem[]>(originals)
    const isModifiedPhaseRef = useRef(true)

    const modifiedMap = useMemo(() => {
      const map = new Map<string, ServiceBlockItem>()
      for (const mod of modified) {
        const key = mod.reference?.toLowerCase()
        if (key) map.set(key, mod)
      }
      return map
    }, [modified])

    const originalMap = useMemo(() => {
      const map = new Map<string, ServiceBlockItem>()
      for (const orig of originals) {
        const key = orig.slug?.current?.toLowerCase()
        if (key) map.set(key, orig)
      }
      return map
    }, [originals])

    useEffect(() => {
      blocksRef.current = blocks
    }, [blocks])

    useEffect(() => {
      const interval = setInterval(() => {
        const current = blocksRef.current
        const candidates: number[] = []

        current.forEach((block, index) => {
          const key = block.slug?.current?.toLowerCase()
          const isModified = !!block.reference

          if (isModifiedPhaseRef.current) {
            if (key && !isModified && modifiedMap.has(key)) {
              candidates.push(index)
            }
          } else {
            const refKey = block.reference?.toLowerCase()
            if (isModified && refKey && originalMap.has(refKey)) {
              candidates.push(index)
            }
          }
        })

        if (candidates.length === 0) {
          isModifiedPhaseRef.current = !isModifiedPhaseRef.current
          return
        }

        const randomIndex = candidates[Math.floor(Math.random() * candidates.length)]
        const currentBlock = current[randomIndex]

        const key = isModifiedPhaseRef.current
          ? currentBlock.slug?.current?.toLowerCase()
          : currentBlock.reference?.toLowerCase()

        const nextBlock = isModifiedPhaseRef.current ? modifiedMap.get(key!) : originalMap.get(key!)

        if (!nextBlock) return

        const newBlocks = [...current]
        newBlocks[randomIndex] = nextBlock

        blocksRef.current = newBlocks
        setBlocks(newBlocks)
      }, 3000)

      return () => clearInterval(interval)
    }, [modifiedMap, originalMap])

    return blocks
  }

  const displayedBlocks = useSwappableBlocks(originalBlocks, modifiedBlocks)

  return (
    <Section className="flex flex-col items-start gap-12 mb-14 md:mb-23 px-4 pt-8 md:px-6.5 md:pt-10 lg:gap-5">
      <Container className="w-full">
        <div className="w-full max-w-171 mb-12.5 lg:mb-17">
          <h1 className="h3 text-dark-green">{title}</h1>
          {description && (
            <PortableTextParser content={description} className="mt-4 text-body md:mt-8" />
          )}
        </div>

        <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-[29.2%_39.3%_29.2%]">
          <div className="flex flex-col gap-4 w-full">
            {displayedBlocks?.[0] && (
              <TextBlock block={displayedBlocks[0]} className="lg:aspect-[405/404]" />
            )}
            {displayedBlocks?.[1] && (
              <TextBlock
                block={displayedBlocks[1]}
                className="lg:flex-1 lg:aspect-[405/290] lg:justify-end"
              />
            )}
          </div>

          <div className="flex flex-col gap-4 w-full">
            {displayedBlocks?.[2] && (
              <TextBlock
                block={displayedBlocks[2]}
                className="lg:flex-1 lg:aspect-[545/272] lg:justify-end"
              />
            )}
            {displayedBlocks?.[3] && (
              <ImageOnlyBlock
                block={displayedBlocks[3]}
                className="relative aspect-[361/280] lg:aspect-[545/422] lg:flex-1"
              />
            )}
          </div>

          <div className="flex flex-col gap-4 w-full">
            {displayedBlocks?.[4] && (
              <TextBlock block={displayedBlocks[4]} className="lg:aspect-[405/183]" />
            )}
            <div className="relative">
              {displayedBlocks?.[5] && (
                <div className="absolute -top-3 -left-3 p-3 min-w-[67.87%] min-h-[35.4%] w-fit bg-cream rounded-lg z-20 lg:-top-4 lg:-left-4 lg:p-4 lg:w-aut">
                  <TextBlock
                    block={displayedBlocks[5]}
                    className="lg:h-full min-h-0"
                    minHeight={165}
                  />
                  <div className="absolute top-3 -right-2 corner corner-top-left lg:top-4 lg:-right-2"></div>
                  <div className="absolute -bottom-2 left-3 corner corner-top-left lg:-bottom-2 lg:left-4"></div>
                </div>
              )}
              {displayedBlocks?.[6] && (
                <TextBlock
                  block={displayedBlocks[6]}
                  className="z-10 h-[511px] w-full [aspect-[361/511] lg:h-auto md:aspect-4/3 lg:aspect-[405/511]"
                  textAlignment="bottom"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
