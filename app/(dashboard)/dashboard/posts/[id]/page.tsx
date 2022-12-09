import Form from '../../../../../components/editor/form'
import { getPostById } from '../../../../../lib/post'
export default async function Home({ params }: any) {
  const data = await getPostById(params.id)
  if (!data.post) return <>Not Found</>
  return (
    <>
      <Form 
        title={data.post.title}
        content={JSON.parse(data.post.content || '')}
        id={params.id}
      />
    </>
  )
}
