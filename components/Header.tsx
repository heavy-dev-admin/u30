'use client'
import clsx from 'clsx'
import { SanityImage } from 'components/SanityImage'
import content from 'content/text.json'
import useScrollDirection from 'hooks/useScrollDirection'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Settings } from 'types/settings'

import Container from './Structure/Container'

export default function Header({ settings }: { settings: Settings }) {
  const { logo, links: navItems, contactUrl, contactButtonText } = settings?.menu || {}

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollDirection = useScrollDirection()

  const isActiveLink = (slug: string) => {
    if (slug === '/' && pathname === '/') return true
    if (slug !== '/' && pathname === `/${slug}`) return true
    return false
  }

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
      className={`sticky top-0 z-40 bg-cream p-4 transition-all duration-500 md:px-6.5 md:pt-6.5 md:pb-4 ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <Container className="flex items-center justify-between w-full relative z-20">
        <Link
          href="/"
          className="h-11 w-auto [&_img]:h-[43px] [&_img]:w-auto"
          onClick={() => setIsMenuOpen(false)}
        >
          {logo && <SanityImage asset={logo.asset} alt={logo.alt || ''} maxWidth={90} />}
        </Link>
        <nav className="hidden md:flex cursor-pointer" aria-label="Primary">
          {navItems?.map((item, index) => {
            const href = item.seoPage?.slug?.current || '/'
            const isActive = isActiveLink(href)

            return (
              <Link
                key={index}
                href={item.seoPage?.slug?.current || '/'}
                className={`button rounded-none capitalize bg-beige px-2.5 text-base transition-colors ${
                  isActive ? 'text-green' : 'text-dark-green hover:bg-cream'
                } ${index === 0 ? 'rounded-l-lg pl-4' : ''} ${
                  index === navItems.length - 1 ? 'rounded-r-lg pr-4' : ''
                }`}
              >
                {item.seoPage?.title}
              </Link>
            )
          })}
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
      </Container>
      <div
        className={`absolute top-0 left-0 w-full h-dvh bg-cream z-10 p-4 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center items-center gap-11 flex-1">
            {navItems?.map((item, index) => {
              const href = item.seoPage?.slug?.current || '/'
              const isActive = isActiveLink(href)

              return (
                <Link
                  key={index}
                  href={item.seoPage?.slug?.current || '/'}
                  className={clsx(
                    'text-display text-dark-green',
                    isActive ? 'text-green' : 'text-dark-gren'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.seoPage?.title}
                </Link>
              )
            })}
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
