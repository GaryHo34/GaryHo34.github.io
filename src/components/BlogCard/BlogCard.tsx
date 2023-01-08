import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Container, Date, Title } from './BlogCard.styled';
import { BlogCardProps } from "./BlogCard.types";

export default function BlogCard({
  post,
}: BlogCardProps) {

  return (
    <Container>
      <Title>{post.title}</Title>
      <Date><i>{post.date}</i></Date>
      <ReactMarkdown className='disable' remarkPlugins={[remarkGfm]}>
        {`${post.content.substring(0, 20)}...`}
      </ReactMarkdown>
    </Container>
  )
}