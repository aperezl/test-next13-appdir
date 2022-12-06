import prisma from '.'

export interface Post {
  id: string
  title: string
  content: string | null
  published: boolean
  authorId: string
}

export interface CreatePostResponse {
  post?: Post
  error?: any
}

export interface GetAllPostsResponse {
  posts: Post[]
  error?: any
}

export interface GetPostByIdResponse {
  post?: Post | null
  error?: any
}

export interface UpdatePostResponse {
  post?: Post | null
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

export async function updatePost(id: string, post:Post): Promise<UpdatePostResponse> {
  try {
    const postFromDB = await prisma.post.update( {
      where: { id },
      data: {
        title: post.title,
        content: post.content
      }
    })
    return { post: postFromDB}
  } catch(error) {
    return { error }
  }
}

export async function getAllPosts({ sort, order }: any): Promise<GetAllPostsResponse> {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true
      },
      orderBy: {
        [sort]: order
      }
    })
    return { posts }
  } catch(error) {
    return { posts: [], error }
  } 
}

export async function getPostById(id: string):Promise<GetPostByIdResponse> {
  try {
    const post = await prisma.post.findUnique({ where: { id }})
    return { post }
  } catch(error) {
    return { error }
  }
}