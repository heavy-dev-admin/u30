import FourRightsDesktop from 'components/FourRightsDesktop'
import FourRightsMobile from 'components/FourRightsMobile'
import type { HomepageSettings } from 'types/pages'

export default function FourRights(props: HomepageSettings['fourRights']) {
  return (
    <section className="w-full lg:py-0">
      <FourRightsDesktop {...props} />
      <FourRightsMobile {...props} />
    </section>
  )
}
