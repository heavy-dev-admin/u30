import FourRightsDesktop from 'components/FourRightsDesktop'
import FourRightsMobile from 'components/FourRightsMobile'
import type { HomepageSettings } from 'types/pages'

export default function FourRights(props: HomepageSettings['fourRights']) {
  return (
    <section className="w-full pt-12 pb-30 bg-dark-green lg:py-[134px]">
      <FourRightsDesktop {...props} />
      <FourRightsMobile {...props} />
    </section>
  )
}
