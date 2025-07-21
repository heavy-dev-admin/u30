import React from 'react'
import ClientQuilt from 'sections/ClientQuilt'
import ClientQuotes from 'sections/ClientQuotes'
import SimpleCta from 'sections/SimpleCta'
import { FlexibleSection } from 'types/common'

export default function FlexibleSections(sectionData: FlexibleSection[]) {
  const sections = Object.values(sectionData)

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
    }

    return null
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
