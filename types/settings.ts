import { Image, LinkInternal } from 'types/common'

export type Settings = {
  seo: {
    siteTitle?: string
    description?: string
    favicon?: Image
    shareImage?: Image
  }
  menu: {
    logo?: Image
    contactUrl?: string
    contactButtonText: string
    links: LinkInternal[]
  }
  footer: {
    footerLogo?: Image
    contactUrl?: string
    footerEmailContact?: string
    footerMenu: LinkInternal[]
    footerHeader: string
    footerContactButtonText: string
  }
}
