export type Image = {
  alt?: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  _type: 'image'
}

export type LinkInternal = {
  _key: string
  _ref: string
  _type: 'linkInternal'
  seoPage: {
    title: string
    slug: {
      _type: 'slug'
      current: string
    }
  }
}

export type LinkExternal = {
  url: string
  newWindow: boolean
  _key: string
  _type: 'linkExternal'
}

export type PortableTextChild = {
  marks: string[]
  text: string
  _key: string
  _type: string
}

export type PortableTextSimpleBlock = {
  _key: string
  _type: 'block'
  style?: string
  markDefs?: (LinkInternal | LinkExternal)[]
  children: PortableTextChild[]
}

export type Client = {
  title: string
  logo: Image
}

export type QuoteItem = {
  client: Client
  quote: string
  attributor: string
  title: string
}

export type ClientQuoteSectionSettings = {
  _type: 'clientQuotesSection'
  quotes?: QuoteItem[]
}

export type ClientsSectionSettings = {
  _type: 'clientsSection'
  title: string
  clients: Client[]
  layout: 'ticker' | 'grid'
}

export type RichTextSectionSettings = {
  _type: 'richTextSection'
  portableTextSimple?: PortableTextSimpleBlock[]
}

export type SimpleCtaSectionSettings = {
  _type: 'simpleCtaSection'
  title: string
  description: string
  image: Image
  layout: 'left' | 'right' | 'center'
  url: string
  newWindow: boolean
}

export type TwoUpSectionSettings = {
  _type: 'twoUpSection'
  title: string
  subtitle: string
  imageLeft: Image
  imageRight: Image
  textBubbleLeft?: string
  textBubbleRight?: string
}

export type FlexibleSection =
  | ClientQuoteSectionSettings
  | ClientsSectionSettings
  | RichTextSectionSettings
  | SimpleCtaSectionSettings
  | TwoUpSectionSettings

export type FourRightItem = {
  label: string
  emblem: Image
  detail?: string
  backgroundColor?: {
    hex: string
  }
}

export type IndustryItem = {
  title: string
  clients: Client[]
}

export type WorkBlockItem = {
  type: 'solid' | 'image'
  title?: string
  slug?: {
    _type: 'slug'
    current: string
  }
  icon?: Image
  backgroundColor?: string
  image?: Image
}

export type RichText = {
  content: PortableTextSimpleBlock[]
  className?: string
}
