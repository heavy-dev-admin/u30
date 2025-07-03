import { ComposeIcon, SearchIcon } from "@sanity/icons"

export const PAGE_REFERENCES = [
  {type: 'page'}
]

export const GROUPS = [
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: ComposeIcon
  },
  {
    name: 'seoPage',
    title: 'SEO',
    icon: SearchIcon
  },
]

export const MAX_CHARACTERS_LENGTH = 96
