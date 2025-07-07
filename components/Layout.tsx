import Footer from 'components/Footer'
import Header from 'components/Header'
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
    <div className="min-h-screen">
      {settings && <Header settings={settings} />}
      <main>{children}</main>
      {settings && <Footer settings={settings} />}
    </div>
  )
}
