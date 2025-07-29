import { getSharedStaticProps, Query, SharedPageProps } from 'lib/shared-props'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Settings } from 'types/settings'

interface Custom404Props {
  settings: Settings
}
export default function Custom404({ settings }: Custom404Props) {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        {/* eslint-disable-next-line */}
        <meta name="description" content="The page you&#39;re looking for doesn&#39;t exist." />
      </Head>

      <div className="min-h-screen flex items-center justify-center px-4 text-dark-green">
        <div className="text-center">
          <h1 className="text-9xl mb-8">404</h1>
          <h2 className="h3 mb-6">Page Not Found</h2>
          <p className="mb-8 mx-auto">
            The page you&#39;re looking for doesn&#39;t exist or has been moved.
          </p>

          <div className="flex justify-center space-x-4">
            <Link href="/" className="button-small inline-block">
              Go Home
            </Link>

            <button onClick={() => window.history.back()} className="button-small">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<Query>) => {
  try {
    const sharedProps = await getSharedStaticProps(ctx)

    return {
      props: {
        ...sharedProps.props,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
