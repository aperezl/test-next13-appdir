import Link from "next/link"
import { getAllPosts, getPostById } from "../../../lib/post"

export default async function Post() {
  const { posts } = await getAllPosts({sort: 'title', order: 'asc'})
  
  return (
    <>
      Posts
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}        
      </ul>
    </>
  )
}