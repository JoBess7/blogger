/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* needed for Vercel */}
        <link href="/fonts/fonts.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}