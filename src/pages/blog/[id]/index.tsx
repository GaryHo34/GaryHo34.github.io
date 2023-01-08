import { postList } from 'posts';
import Router, { useRouter } from 'next/router';
import DefaultLayout from 'components/DefaultLayout';
import BlogPost from 'components/BlogPost';
import { _20230108_ } from 'posts/20230108';

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const postId = Number(id)
  
  return (
    <DefaultLayout>
      <BlogPost post={_20230108_} />
    </DefaultLayout>
  )
}