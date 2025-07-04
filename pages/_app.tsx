import '../tailwind.css'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <Header />
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}
      {draftMode && <VisualEditing />}
      <Footer />
    </>
  )
}
