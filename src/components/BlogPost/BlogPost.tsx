import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Date, Title } from './BlogPost.styled';
import { BlogPostProps } from "./BlogPost.types";

export default function BlogPost({
  post,
}: BlogPostProps) {

  return (
    <>
      <Title>{post.title}</Title>
      <Date><i>{post.date}</i></Date>
      <ReactMarkdown className='markdown-body' remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </>
  )
}