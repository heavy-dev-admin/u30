import '../tailwind.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import Layout from 'components/Layout'
import { SharedPageProps } from 'lib/shared-props'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export default function App({ Component, pageProps }: AppProps<SharedPageProps>) {
  const { draftMode, token, settings } = pageProps

  return (
    <Layout settings={settings}>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      {draftMode && <VisualEditing />}
    </Layout>
  )
}
