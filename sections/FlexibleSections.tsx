import React from 'react'
import ClientQuilt from 'sections/ClientQuilt'
import ClientQuotes from 'sections/ClientQuotes'
import SimpleCta from 'sections/SimpleCta'
import { FlexibleSection } from 'types/common'

export default function FlexibleSections({ sections }: { sections: FlexibleSection[] }) {
  const renderSection = (section: FlexibleSection) => {
    switch (section._type) {
      case 'clientQuotesSection': {
        return <ClientQuotes {...section} />
      }
      case 'clientsSection': {
        return <ClientQuilt {...section} />
      }
      case 'simpleCtaSection': {
        return <SimpleCta {...section} />
      }
      default:
        return null
    }
  }

  return (
    <>
      {sections.map((section, index) => {
        return (
          <React.Fragment key={`${section._type}_${index}`}>
            {renderSection(section)}
          </React.Fragment>
        )
      })}
    </>
  )
}
