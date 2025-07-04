import { Image, LinkInternal } from 'types/common'

export type Settings = {
  seo: {
    siteTitle?: string
    description?: string
    favicon?: Image
    shareImage?: Image
  },
  menu: {
    contactUrl?: string
    links: LinkInternal[]
  },
  footer: {
    contactUrl?: string
    footerEmailContact?: string
    footerMenu: LinkInternal[]
  }
}
