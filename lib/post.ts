import prisma from '.'

interface Post {
  title: string
  content?: string
}

export async function createPost(post: Post) {
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