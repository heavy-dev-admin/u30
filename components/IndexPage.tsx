import Layout from 'components/Layout'
import { Suspense } from 'react'
import type { Settings } from 'types/settings'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings?: Settings
}

export default function IndexPage(props: IndexPageProps) {
  return (
    <Suspense>
      <h1 className="text-3xl font-bold">u30 Starter</h1>
    </Suspense>
  )
}
