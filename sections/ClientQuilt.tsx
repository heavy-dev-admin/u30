import { SanityImage } from 'components/SanityImage'
import Marquee from 'react-fast-marquee'
import { Client, ClientsSectionSettings } from 'types/common'

function ClientItem({ client, isMarquee = false }: { client: Client; isMarquee?: boolean }) {
  return (
    <div
      className={`flex justify-center items-center [&>figure]:flex-1 ${isMarquee ? 'w-40' : 'w-auto'}`}
    >
      <SanityImage
        asset={client.logo}
        alt={client.logo?.alt || client.title}
        className="size-full object-contain"
      />
    </div>
  )
}

function ClientGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="w-full max-w-264.5 mx-auto grid grid-cols-3 gap-x-4 gap-y-3.5 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0">
      {clients.map((client, index) => (
        <ClientItem client={client} key={index} />
      ))}
    </div>
  )
}

function ClientMarquee({ clients }: { clients: Client[] }) {
  return (
    <Marquee autoFill>
      {clients.map((client, index) => (
        <ClientItem client={client} isMarquee key={index} />
      ))}
    </Marquee>
  )
}

export default function ClientQuilt(props: ClientsSectionSettings) {
  const { title, layout, clients } = props

  return (
    <section className="w-full px-8 py-10 bg-cream overflow-hidden md:px-6.5 lg:pt-20 lg:pb-15">
      <h2 className="h4 mb-6 text-dark-green text-center lg:mb-4">{title}</h2>
      {layout === 'grid' ? <ClientGrid clients={clients} /> : <ClientMarquee clients={clients} />}
    </section>
  )
}
