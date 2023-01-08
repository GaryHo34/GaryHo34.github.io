import DefaultLayout from 'components/DefaultLayout';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GaryHo</title>
        <meta name="description" content="Gary Ho's blog and portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <DefaultLayout />
      <div style={{height: 300, width: 20, backgroundColor: 'blue'}}></div>
      <div style={{height: 300, width: 20, backgroundColor: 'red'}}></div>
      <div style={{height: 300, width: 20, backgroundColor: 'yellow'}}></div>
    </>
  )
}
