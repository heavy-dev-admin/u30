import {
  FlexibleSection,
  FourRightItem,
  Image,
  IndustryItem,
  PortableTextSimpleBlock,
  ServiceBlockItem,
} from 'types/common'

export interface GeneralPageSettings {
  seo?: {
    title?: string
    description?: PortableTextSimpleBlock[]
    slug?: string
    shareImage?: Image
  }
  title?: string
  slug?: {
    current?: string
  }
  body?: PortableTextSimpleBlock[]
  flexibleSections?: FlexibleSection[]
  seoPage?: {
    title?: string
    description?: PortableTextSimpleBlock[]
    slug?: string
    shareImage?: Image
  }
}

export type HomepageSettings = GeneralPageSettings & {
  hero: {
    title: string
    subtitle?: string
    heroImage: Image
  }
  fourRights: {
    sectionTitle: string
    sectionSubtitle?: string
    rights: FourRightItem[]
  }
}

export type CareersSettings = GeneralPageSettings & {
  hero: {
    title: string
    description?: PortableTextSimpleBlock[]
    heroType: 'primary' | 'secondary'
  }
}

export type AboutSettings = GeneralPageSettings & {
  hero: {
    title: string
    description?: PortableTextSimpleBlock[]
    image: Image
    layout: 'primary' | 'secondary'
  }
}

export type IndustriesSettings = GeneralPageSettings & {
  hero: {
    title: string
    description?: PortableTextSimpleBlock[]
  }
  industries: IndustryItem[]
}

export type ServicesSettings = GeneralPageSettings & {
  hero: {
    title: string
    description?: PortableTextSimpleBlock[]
    serviceHeroBlocks: ServiceBlockItem[]
  }
}
