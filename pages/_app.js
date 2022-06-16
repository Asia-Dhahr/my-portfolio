import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#581ecc" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#cbbfe3" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
