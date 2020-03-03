import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'
import SiteLayout from '../components/site_layout'

class Urth extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    )
  }
}

export default Urth
