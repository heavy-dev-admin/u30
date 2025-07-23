'use client'
import { SanityImage } from 'components/SanityImage'
import content from 'content/text.json'
import useScrollDirection from 'hooks/useScrollDirection'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Settings } from 'types/settings'

export default function Header({ settings }: { settings: Settings }) {
  const { logo, links: navItems, contactUrl, contactButtonText } = settings?.menu || {}

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollDirection = useScrollDirection()

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
    <header
      className={`sticky top-0 z-50 bg-cream p-4 relative transition-all duration-500 md:px-6.5 md:pt-6.5 md:pb-4 ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center justify-between w-full relative z-20">
        <Link
          href="/"
          className="h-11 w-auto [&_img]:h-[43px] [&_img]:w-auto"
          onClick={() => setIsMenuOpen(false)}
        >
          {logo && <SanityImage asset={logo.asset} alt={logo.alt || ''} />}
        </Link>
        <nav className="hidden md:flex" aria-label="Primary">
          {navItems?.map((item, index) => (
            <Link
              key={index}
              href={item.seoPage?.slug?.current || '/'}
              className={`button bg-beige rounded-none capitalize px-2.5 text-base hover:bg-green ${index === 0 ? 'rounded-l-lg pl-4' : ''} ${index === navItems.length - 1 ? 'rounded-r-lg pr-4' : ''}`}
            >
              {item.seoPage?.title}
            </Link>
          ))}
          {contactUrl && (
            <Link href={contactUrl} className="button ml-4">
              {contactButtonText}
            </Link>
          )}
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="button min-w-22 md:hidden"
          aria-label={content.toggleMenu}
        >
          <span className="transition-all duration-300">
            {isMenuOpen ? content.close : content.menu}
          </span>
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-dvh bg-cream z-10 p-4 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center items-center gap-11 flex-1">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.seoPage?.slug?.current || '/'}
                className="text-display text-dark-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.seoPage?.title}
              </Link>
            ))}
          </div>
          {contactUrl && (
            <Link href={contactUrl} className="button mt-auto" onClick={() => setIsMenuOpen(false)}>
              {contactButtonText}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
