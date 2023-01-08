import BlogCard from 'components/BlogCard'
import DefaultLayout from 'components/DefaultLayout'
import Head from 'next/head'
import { postList } from 'posts'

export default function Home() {
  return (
    <>
      <Head>
        <title>GaryHo</title>
        <meta name="description" content="Gary Ho's blog and portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <DefaultLayout>
        {postList.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </DefaultLayout>
    </>
  )
}
