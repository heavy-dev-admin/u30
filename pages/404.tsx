import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page youre looking for doesnt exist." />
      </Head>

      <div className="min-h-screen flex items-center justify-center px-4 text-dark-green">
        <div className="text-center">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page youre looking for doesnt exist or has been moved.
          </p>

          <div className="space-x-4">
            <Link
              href="/"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
