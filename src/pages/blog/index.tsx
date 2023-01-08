import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

export default function Blog() {
  const markdown = `
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    
* Lists
* [ ] todo
* [x] done
    
A table:
    
| a | b |
| - | - |
`
  return (
      <ReactMarkdown className='markdown-body' remarkPlugins={[remarkGfm]} children={markdown} />
  )
}