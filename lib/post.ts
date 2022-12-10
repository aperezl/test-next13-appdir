import prisma from '.'

const makeSlug = (s:string) => s
  .trim()
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

export interface Post {
  id: string
  title: string
  content: string | null
  slug: string
  image?: string | null
  tags: string[]
  excerpt: String
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
        slug: makeSlug(post.title),
        excerpt: 'Your description here',
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
    console.log({ postlib: post })
    const postFromDB = await prisma.post.update( {
      where: { id },
      data: {
        title: post.title,
        slug: makeSlug(post.title),
        content: post.content,
        image: post.image
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

export async function getPostBySlug(slug: string):Promise<GetPostByIdResponse> {
  try {
    const post = await prisma.post.findUnique({ where: { slug }})
    return { post }
  } catch(error) {
    return { error }
  }
}