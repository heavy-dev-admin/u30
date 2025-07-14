import { Suspense } from 'react'
import type { Settings } from 'types/settings'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings?: Settings
}

export default function IndexPage(props: IndexPageProps) {
  return <div></div>
}
