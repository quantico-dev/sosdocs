import '@/styles/css/bootstrap.css'

import type { AppProps } from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeError', () => nProgress.done())
Router.events.on('routeChangeComplete', () => nProgress.done())

import { Translation } from '@/utils/contexts/TranslationContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Translation>
      <Component {...pageProps} />
    </Translation>
  )
}
