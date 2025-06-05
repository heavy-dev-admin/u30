import Layout from 'components/Layout'
import type {Post, Settings} from 'lib/sanity.queries'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}


export default function PostPage(props: PostPageProps) {
  const {preview, loading} = props

  return (
    <>

      <Layout preview={preview} loading={loading}>
        Post Page
      </Layout>
    </>
  )
}