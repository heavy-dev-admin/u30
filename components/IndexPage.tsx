import Hero from 'components/Hero'
import { HomepageSettings } from 'types/pages'

export default function IndexPage(props: HomepageSettings) {
  const { hero } = props

  return (
    <div>
      <Hero hero={hero} />
    </div>
  )
}
