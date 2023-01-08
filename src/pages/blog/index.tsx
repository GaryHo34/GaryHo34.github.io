import { _20230108_ } from 'posts/20230108';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

export default function Blog() {

  return (
    <ReactMarkdown className='markdown-body' remarkPlugins={[remarkGfm]}>
      {_20230108_.content}
    </ReactMarkdown>
  )
}