'use client'

import Link from 'next/link'

const footerData = {
  header: 'Ready to work together?',
  contactButtonText: 'Get in touch',
  menu: [
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
    },
    {
      label: 'Careers',
      href: '/careers',
    }
  ],
  contactEmail: 'therights@u30.com'
}

export default function Footer() {

  return (
    <footer className="bg-dark-green text-cream px-4 md:px-6.5">
     <div className="flex flex-col gap-4 pt-10 pb-[71px] md:pt-8 md:pb-23.5 md:gap-6">
        <h3 className="text-body-large">{footerData.header}</h3>
        <Link href="/" className="button-large w-full">
          {footerData.contactButtonText}
        </Link>
      </div>
      <div className="flex flex-col gap-4 pb-4 md:pb-6.5 md:gap-6 md:flex-row md:justify-between md:items-end">
        <div className="w-full flex justify-between order-2 md:w-auto md:order-1">
          <Link href="/" className="h-11 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 44" className="text-inherit h-full w-auto">
              <path fill="currentColor" d="M21.6 16.513a5.891 5.891 0 0 0-5.89 5.89v7.855a1.965 1.965 0 0 1-3.93 0v-7.855a5.891 5.891 0 0 0-11.78 0v13.742A7.857 7.857 0 0 0 7.855 44h11.78a7.857 7.857 0 0 0 7.855-7.855V22.4a5.891 5.891 0 0 0-5.89-5.89v.003ZM50.89.77H37.145a5.891 5.891 0 0 0 0 11.78H45a1.965 1.965 0 0 1 0 3.929h-7.84a5.906 5.906 0 1 0 0 11.812h7.843a1.965 1.965 0 0 1 0 3.928h-7.855a5.891 5.891 0 0 0 0 11.781H50.89a7.857 7.857 0 0 0 7.855-7.855V8.625A7.857 7.857 0 0 0 50.89.77Zm31.255.003h-11.78a7.857 7.857 0 0 0-7.855 7.854v27.518A7.857 7.857 0 0 0 70.365 44h11.78A7.857 7.857 0 0 0 90 36.145V8.627A7.857 7.857 0 0 0 82.145.773Zm-3.925 15.71v13.772a1.965 1.965 0 0 1-3.93 0V14.518a1.965 1.965 0 0 1 3.93 0v1.964Z"/>
            </svg>
          </Link>
          <div className="flex flex-col md:hidden">
            <p className="text-body-small">Client Inquiries:</p>
            <Link href={`mailto:${footerData.contactEmail}`} className="text-body-small">{footerData.contactEmail}</Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 mb-[71px] order-1 md:order-2 md:gap-8 md:flex-row md:justify-center md:mb-0">
          {footerData.menu.map((item) => (
            <Link href={item.href} key={item.label} className="h6 transition-colors duration-300 ease-in-out hover:text-green">{item.label}</Link>
          ))}
        </div>
        <div className="flex-col hidden md:flex">
          <p className="text-body-small">Client Inquiries:</p>
          <Link href={`mailto:${footerData.contactEmail}`} className="text-body-small">{footerData.contactEmail}</Link>
        </div>
      </div>
    </footer>
  )
} 