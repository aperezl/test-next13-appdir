import { getAllPosts, getPostById } from "../../../../lib/post"
import Container from "../../../../ui/blog/post/container"




export const dynamicParams = true

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ sort: 'title', order: 'desc' })
  return posts?.map(post => ({ id: post.id }))
}


export default async function Post({ params }: any) {
  const { post } = await getPostById(params.id)
  if (!post) return <h1>Not fount</h1>
  
  return (
    <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
      <div>        
        <Container post={post} />
      </div>
    </div>
  )
}