import Layout from 'components/Layout'
import { Suspense } from 'react'
import type { Settings } from 'types/settings'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview = false, loading } = props

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Suspense>
          <h1 className="text-3xl font-bold">u30 Starter</h1>
        </Suspense>
      </Layout>
    </>
  )
}
