import type { AppProps } from 'next/app'
import { GlobalStyled } from 'styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  const defaultTheme = 'light'
  return (
    <>
      <GlobalStyled theme={defaultTheme} />
      <Component {...pageProps} />
    </>
  )
}
