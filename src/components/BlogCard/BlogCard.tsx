import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Container, Date, Title, ReadButton } from './BlogCard.styled';
import { BlogCardProps } from "./BlogCard.types";

export default function BlogCard({
  post,
  id,
}: BlogCardProps) {
  const router = useRouter();
  return (
    <Container>
      <Title>{post.title}</Title>
      <Date><i>{post.date}</i></Date>
      <ReactMarkdown className='disable' remarkPlugins={[remarkGfm]}>
        {`${post.content.substring(0, 20)}...`}
      </ReactMarkdown>
      <ReadButton onClick={() => router.push(`/blog/${id}`)}>Read</ReadButton>
    </Container>
  )
}