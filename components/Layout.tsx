import Footer from 'components/Footer'
import Header from 'components/Header'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Settings } from 'types/settings'

const LottieIntro = dynamic(() => import('../components/LottieIntro'), { ssr: false })

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
  const [showIntro, setShowIntro] = useState<boolean>(false)
  const [isReady, setIsReady] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const seenIntro = sessionStorage.getItem('seenIntro')
    if (seenIntro) {
      setShowIntro(false)
    } else {
      sessionStorage.setItem('seenIntro', 'true')
      setShowIntro(true)
    }
    setIsReady(true)
  }, [])

  if (!isReady) return null

  return (
    <div className="flex flex-col min-h-screen">
      {showIntro ? (
        <LottieIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <Header settings={settings} />
          <AnimatePresence mode="wait">
            <motion.main
              key={router.asPath}
              className="relative flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer settings={settings} />
        </>
      )}
    </div>
  )
}
