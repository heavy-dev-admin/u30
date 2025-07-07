'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Settings } from 'types/settings'

import { SanityImage } from './SanityImage'

export default function Header({ settings }: { settings: Settings }) {
  const { logo, links: navItems, contactUrl } = settings.menu

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="bg-cream p-4 relative md:px-6.5 md:pt-6.5 md:pb-4">
      <div className="flex items-center justify-between w-full relative z-20">
        <Link href="/" className="h-11 w-auto [&_img]:h-[43px] [&_img]:w-auto">
          <SanityImage asset={logo.asset} alt={logo.alt} />
        </Link>

        <nav className="hidden md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.seoTitle}
              href={item.slug.current} 
              className={`button bg-beige rounded-none hover:bg-green ${index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''} ${index === navItems.length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''}`}
            >
              {item.seoTitle}
            </Link>
          ))}

          <Link href={contactUrl} className="button ml-4">
            Contact
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="button md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className={`absolute top-0 left-0 w-full h-dvh bg-cream z-10 p-4 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center items-center gap-11 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.seoTitle}
                href={item.slug.current} 
                className="text-display text-dark-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.seoTitle}
              </Link>
            ))}
          </div>
          <Link
            href={contactUrl} 
            className="button mt-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
} 