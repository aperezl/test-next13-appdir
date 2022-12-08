interface Elements {
  [key: string]: Function
}

interface Block {
  type: string
  data: any
}

const elements: Elements = {
  header: (data:any) => {
    const H = `h${data.level}` as keyof JSX.IntrinsicElements
    return <H>{data.text}</H>
  },
  paragraph: (data:any) => <p dangerouslySetInnerHTML={{__html: data.text}}></p>,
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


export default function Article ({ content }: any) {
  const parsedContent = JSON.parse(content)
  return (
    <article className="mx-auto my-3 max-w-screen-lg px-8 prose prose-lg dark:prose-invert prose-a:text-blue-500">
      <EditorJSParser content={parsedContent} />
    </article>
  )
}