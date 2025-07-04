'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  {
    label: 'About Us',
    href: '/',
  },
  {
    label: 'Services',
    href: '/styleguide',
  },
  {
    label: 'Industries',
    href: '/styleguide',
  }
]

const contactItem = {
  label: 'Contact',
  href: '/contact',
}

export default function Header() {
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
    <header className="bg-cream p-4 relative flex justify-between items-center md:px-6.5 md:pt-6.5 md:pb-4">
      <Link href="/" className="h-11 w-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 44" className="text-dark-green h-full w-auto">
          <path fill="currentColor" d="M21.6 16.513a5.891 5.891 0 0 0-5.89 5.89v7.855a1.965 1.965 0 0 1-3.93 0v-7.855a5.891 5.891 0 0 0-11.78 0v13.742A7.857 7.857 0 0 0 7.855 44h11.78a7.857 7.857 0 0 0 7.855-7.855V22.4a5.891 5.891 0 0 0-5.89-5.89v.003ZM50.89.77H37.145a5.891 5.891 0 0 0 0 11.78H45a1.965 1.965 0 0 1 0 3.929h-7.84a5.906 5.906 0 1 0 0 11.812h7.843a1.965 1.965 0 0 1 0 3.928h-7.855a5.891 5.891 0 0 0 0 11.781H50.89a7.857 7.857 0 0 0 7.855-7.855V8.625A7.857 7.857 0 0 0 50.89.77Zm31.255.003h-11.78a7.857 7.857 0 0 0-7.855 7.854v27.518A7.857 7.857 0 0 0 70.365 44h11.78A7.857 7.857 0 0 0 90 36.145V8.627A7.857 7.857 0 0 0 82.145.773Zm-3.925 15.71v13.772a1.965 1.965 0 0 1-3.93 0V14.518a1.965 1.965 0 0 1 3.93 0v1.964Z"/>
        </svg>
      </Link>

      <nav className="hidden md:flex">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`button bg-beige rounded-none hover:bg-green ${index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''} ${index === navItems.length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''}`}
          >
            {item.label}
          </Link>
        ))}

        <Link href={contactItem.href} className="button ml-4">
          {contactItem.label}
        </Link>
      </nav>

      <button
        onClick={toggleMenu}
        className="button md:hidden"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      <div className={`absolute top-18.5 left-0 w-full h-[calc(100dvh-74px)] bg-cream p-4 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center items-center gap-11 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-display text-dark-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href={contactItem.href} 
            className="button mt-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            {contactItem.label}
          </Link>
        </div>
      </div>
    </header>
  )
} 