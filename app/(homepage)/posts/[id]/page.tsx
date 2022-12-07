import { getPostById } from "../../../../lib/post"

interface Elements {
  [key: string]: Function
}

interface Block {
  type: string
  data: any
}

const elements: Elements = {
  header: (data:any) => <h1>{data.text}</h1>,
  paragraph: (data:any) => <p>{data.text}</p>,
  image: (data:any) => <img src={data.file.url} alt={data.file.caption} />

}

const EditorJSParser = ({ content }:any) => {
  const { blocks } = content
  const formatedContent = blocks.map(({ type, data }:Block, index: number ) => {
    if (typeof elements[type] === 'function') {
      return <div key={index}>{elements[type](data)}</div>
    }
    return <p key={index}>UNDEFINED!!!! <pre>{JSON.stringify({type, data}, null, 2)}</pre></p>
  })
  return formatedContent

}

export default async function Post({ params }: any) {
  const { post } = await getPostById(params.id)
  const parsedContent = JSON.parse(post?.content || '')
  console.log({parsedContent })
  
  return (
    <>
      Posts
      <EditorJSParser content={parsedContent} />
    </>
  )
}