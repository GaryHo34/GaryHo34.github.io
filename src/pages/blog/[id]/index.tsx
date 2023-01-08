import { postList } from 'posts';
import { useRouter } from 'next/router';
import DefaultLayout from 'components/DefaultLayout';
import BlogPost from 'components/BlogPost';

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const postId = Number(id)
  return (
    <DefaultLayout>
      <BlogPost post={postList[postId]} />
    </DefaultLayout>
  )
}