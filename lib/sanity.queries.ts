import groq from 'groq'

const flexibleSectionsFragment = groq`
  flexibleSections[]->{
    ...,
    _type == "clientsSection" => {
      ...,
      clients[]->{
        ...
      }
    },
    _type == "clientQuotesSection" => {
      quotes[]{
        ...,
        client->{
          ...
        }
      }
    }
  }
`

export const settingsQuery = groq`*[_type == "settings"][0]{
  ...,
  menu {
    ...,
    links[]->{
      ...,
      _type == "linkInternal" => {
        ...
      }
    }
  },
  footer {
    ...,
    footerMenu[]->{
      ...,
      _type == "linkInternal" => {
        ...
      }
    }
  }
}`

export const homepageQuery = groq`*[_type == "homepage"][0]{
  ...,
  ${flexibleSectionsFragment}
}`

export const aboutPageQuery = groq`*[_type == "about"][0]{
  ...,
  ${flexibleSectionsFragment}
}`

export const careerPageQuery = groq`*[_type == "career"][0]{
  ...,
  ${flexibleSectionsFragment}
}`

export const industriesPageQuery = groq`*[_type == "industries"][0]{
  ...,
  industries[] {
    ...,
    clients[]-> {
    ...
    }
  },
  ${flexibleSectionsFragment}
}`

export const workPageQuery = groq`*[_type == "work"][0]{
  ...,
  ${flexibleSectionsFragment}
}`
