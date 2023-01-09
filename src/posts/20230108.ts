import { Post } from "types";

export const _20230108_: Post = {
    id: 1,
    date: '2023-01-08',
    title: "Understanding React useState",
    content: `
## React (re)renders your component when:
- there is a state update scheduled by your component
- including updates scheduled by custom hooks your component consumes
    -   the parent component got rendered and your component doesn’t meet the criteria for **bailing out on re-rendering**, where **all these four conditions** have to be satisfied at the same time:
        1.  Your component has been rendered before i.e. it already mounted
        2.  No \`props\` (referentially) changed
        3.  No any context value consumed by your component changed
        4.  Your component itself didn’t schedule an update
-   You probably shouldn’t need to worry about seemingly unnecessary re-renders until it becomes a performance issue. Check out the [flow chart](https://www.zhenghao.io/posts/react-rerender#the-flow-chart) I made for solutions you can adopt when a performance issue occurs.

## useState
first import useState \`import {useState} from React;\` then take instance:
\`const [state, setState] = useState(initialState)\` 
React will automatically set state to initialState.

When ever we call setState, the component render!

> DO NOT change state outside the setState function
`,
}
