import IndexPage, { type IndexPageProps } from 'components/IndexPage'
import { settingsQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { Settings } from 'types/settings'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return <IndexPage preview loading={loadingSettings} settings={settings} />
}
