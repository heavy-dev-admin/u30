import '../tailwind.css'

import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="X-robots-tag" content="noindex, nofollow" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
