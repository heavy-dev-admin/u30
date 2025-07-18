import groq from 'groq'

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
  flexibleSections[]->{
    ...,
    _type == "clientQuotesSection" => {
      quotes[]{
        ...,
        client->{
          ...
        }
      }
    }
  }
}`

export const aboutPageQuery = groq`*[_type == "about"][0]{
  ...,
  flexibleSections[]->{
    ...
  }
}`

export const careerPageQuery = groq`*[_type == "career"][0]{
  ...,
  flexibleSections[]->{
    ...
  }
}`

export const industriesPageQuery = groq`*[_type == "industries"][0]{
  ...,
  flexibleSections[]->{
    ...
  }
}`

export const workPageQuery = groq`*[_type == "work"][0]{
  ...,
  flexibleSections[]->{
    ...
  }
}`
