import prisma from '.'

export interface Post {
  id: string
  title: string
  content: string | null
  published: boolean
  authorId: string
}

export async function createPost(post: Post): Promise<{ post: Post}> {
  const postFromDB = await prisma.post.create({
    data: {
      title: post.title,
      content: post.content,
      author: { connect: { email: 'aperezl@gmail.com' }}
    }
  })
  return { post: postFromDB }

}

export async function getAllPosts(): Promise<{ posts: Post[]}> {
  const posts = await prisma.post.findMany()
  return { posts }  
}