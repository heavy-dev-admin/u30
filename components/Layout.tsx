import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'
import { Settings } from 'types/settings'

export default function Layout({
  preview,
  loading,
  children,
  settings,
}: {
  preview?: boolean
  loading?: boolean
  children: React.ReactNode
  settings: Settings
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="X-robots-tag" content="noindex, nofollow" />
      </Head>
      <Header settings={settings} />
      <main className="relative flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  )
}
