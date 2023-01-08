import type { AppProps } from 'next/app'
import Head from 'next/head';
import { GlobalStyled } from 'styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  const defaultTheme = 'light'
  return (
    <>
      <Head>
        <title>GaryHo</title>
        <meta name="description" content="Gary Ho's blog and portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <GlobalStyled theme={defaultTheme} />
      <Component {...pageProps} />
    </>
  )
}
