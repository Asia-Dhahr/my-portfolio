import '../styles/globals.css'
import React from 'react'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
