import Link from "next/link"
import { getAllPosts } from "../../../lib/post"

export default async function Post() {
  const { posts } = await getAllPosts({sort: 'title', order: 'asc'})
  
  return (
    <>
      Posts
      <ul>
        {posts.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/posts/${slug}`}>{title}</Link>
          </li>
        ))}        
      </ul>
    </>
  )
}