'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { IndustryItem } from 'types/common'

import ChevronIcon from './ChevronIcon'
import InlineSVG from './InlineSvg'

interface IndustryCardProps {
  industry: IndustryItem
  index: number
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const [isOpen, setIsOpen] = useState(false)

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
      setIsOpen((prev) => !prev)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      className={clsx(
        isOpen ? 'bg-dark-green text-green' : `${classes.bg} text-dark-green`,
        'px-6 py-5 relative rounded-lg transition-all mb-4 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green'
      )}
    >
      <div className="absolute right-6 top-5">
        <ChevronIcon isOpen={isOpen} openStateColor={'#85c441'} />
      </div>

      <h3 className="font-semibold text-xl">{industry.title}</h3>

      <div
        className={clsx(
          'overflow-hidden transition-all duration-500',
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-wrap justify-between lg:justify-start lg:gap-6">
          {industry.clients.map((client) => (
            <div key={client._id} className="py-2 w-[45%] lg:w-40">
              <InlineSVG asset={client.logo.asset} className="w-full h-auto" fill={'#85c441'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
