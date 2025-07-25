import { SanityImage } from 'components/SanityImage'
import Container from 'components/Structure/Container'
import Section from 'components/Structure/Section'
import { ReactElement } from 'react'
import { SimpleCtaSectionSettings } from 'types/common'

export default function SimpleCta(props: SimpleCtaSectionSettings) {
  const { title, description, image, layout, url, newWindow } = props

  const renderContent = (): ReactElement => {
    const justifyClass =
      layout === 'center'
        ? 'items-center text-center'
        : layout === 'left'
          ? 'items-start'
          : 'items-end text-right'

    const content: ReactElement = (
      <div
        className={`w-full flex flex-col gap-8 px-6 py-20 bg-beige rounded-lg lg:gap-10 ${justifyClass}`}
      >
        {title && <h2 className="text-body-large font-medium text-dark-green">{title}</h2>}
        {description && (
          <p className="text-body-small font-medium text-dark-green">{description}</p>
        )}
        {image && (
          <SanityImage
            asset={image}
            alt={image?.alt || title}
            className="w-55 h-auto object-contain lg:w-72.5"
          />
        )}
      </div>
    )

    if (url) {
      return (
        <a
          href={url}
          target={newWindow ? '_blank' : '_self'}
          title={title}
          rel={newWindow ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      )
    }

    return content
  }

  return (
    <Section className="bg-cream px-4 pb-12 lg:px-6.5 lg:pb-14">
      <Container>{renderContent()}</Container>
    </Section>
  )
}
