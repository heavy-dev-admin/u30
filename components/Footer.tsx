'use client'

import Link from 'next/link'
import { Settings } from 'types/settings'

import { SanityImage } from './SanityImage'

export default function Footer({ settings }: { settings: Settings }) {
  const { 
    footerLogo,
    footerMenu,
    footerHeader,
    footerContactButtonText,
    footerEmailContact,
    contactUrl
  } = settings.footer

  const footerData = {
    header: footerHeader,
    contactButtonText: footerContactButtonText,
    menu: footerMenu,
    contactEmail: footerEmailContact,
  }

  return (
    <footer className="bg-dark-green text-cream px-4 md:px-6.5">
     <div className="flex flex-col gap-4 pt-10 pb-[71px] md:pt-8 md:pb-23.5 md:gap-6">
        <h3 className="text-body-large">{footerData.header}</h3>
        <Link href={contactUrl} className="button-large w-full">
          {footerData.contactButtonText}
        </Link>
      </div>
      <div className="flex flex-col gap-4 pb-4 md:pb-6.5 md:gap-6 md:flex-row md:justify-between md:items-end">
        <div className="w-full flex justify-between order-2 md:w-auto md:order-1">
          <Link href="/" className="h-11 w-auto [&_img]:h-[43px] [&_img]:w-auto">
            <SanityImage asset={footerLogo.asset} alt={footerLogo.alt} />
          </Link>
          <div className="flex flex-col md:hidden">
            <p className="text-body-small">Client Inquiries:</p>
            <Link href={`mailto:${footerData.contactEmail}`} className="text-body-small">{footerData.contactEmail}</Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 mb-[71px] order-1 md:order-2 md:gap-8 md:flex-row md:justify-center md:mb-0">
          {footerData.menu.map((item, index) => (
            <Link
              href={item.slug.current}
              key={index}
              className="h6 transition-colors duration-300 ease-in-out hover:text-green"
            >
              {item.seoTitle}
            </Link>
          ))}
        </div>
        <div className="flex-col hidden order-3 md:flex">
          <p className="text-body-small">Client Inquiries:</p>
          <Link href={`mailto:${footerData.contactEmail}`} className="text-body-small">{footerData.contactEmail}</Link>
        </div>
      </div>
    </footer>
  )
} 