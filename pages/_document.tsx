import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-dark-green">
        <div className="bg-cream">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
