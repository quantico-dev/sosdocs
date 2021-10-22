import Head from 'next/head'
import { ReactNode } from 'react'

import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export function Page({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
