import prisma from '.'

export interface Post {
  id: string
  title: string
  content: string | null
  published: boolean
  authorId: string
}

export interface CreatePostResponse {
  post?: Post,
  error?: any
}

export interface GetAllPostsResponse {
  posts: Post[]
  error?: any
}

export async function createPost(post: Post): Promise<CreatePostResponse> {
  try {
    const postFromDB = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        author: { connect: { email: 'aperezl@gmail.com' }}
      }
    })
    return { post: postFromDB }
  } catch (error) {
    return { error }
  }
}

export async function getAllPosts(): Promise<GetAllPostsResponse> {
  try {
    const posts = await prisma.post.findMany()
    return { posts }
  } catch(error) {
    return { posts: [], error }
  }
  
}