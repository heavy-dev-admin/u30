'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IndustryItem } from 'types/common'

import ChevronIcon from './ChevronIcon'
import InlineSVG from './InlineSvg'

interface IndustryCardProps {
  industry: IndustryItem
  index: number
  open: number
  setOpen: (index: number) => void
}

export default function IndustryCard({ industry, index, open, setOpen }: IndustryCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(open === index)

  useEffect(() => {
    if (open === index) setIsOpen(true)
    else setIsOpen(false)
  }, [open, index])

  const getClasses = (idx: number) => {
    switch (idx % 3) {
      case 0:
        return {
          bg: 'bg-light-green',
          text: 'text-light-green',
        }
      case 1:
        return {
          bg: 'bg-pink',
          text: 'text-pink',
        }
      case 2:
        return {
          bg: 'bg-green',
          text: 'text-green',
        }
      default:
        return {
          bg: 'bg-light-green',
          text: 'text-light-green',
        }
    }
  }

  const classes = getClasses(index)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()

      if (open === index) setOpen(null)
      else setOpen(index)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (open === index) setOpen(null)
    else setOpen(index)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      className={clsx(
        isOpen ? 'bg-dark-green text-green' : `${classes.bg} text-dark-green`,
        'px-6 py-5 relative rounded-lg transition-all mb-4 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green'
      )}
    >
      <div className="absolute right-6 top-3.5">
        <ChevronIcon isOpen={isOpen} openStateColor={'#85c441'} />
      </div>

      <h3 className="font-semibold text-xl leading-none">{industry.title}</h3>

      <div
        className={clsx(
          'overflow-hidden transition-all duration-500',
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-wrap justify-center lg:gap-6">
          {industry.clients.map((client) => (
            <div key={client._id} className="py-2 w-[45%] lg:w-40">
              <InlineSVG
                asset={client.logo.asset}
                className="w-full h-auto"
                fill={'#85c441'}
                adjustedWidth={client.logoSize}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
