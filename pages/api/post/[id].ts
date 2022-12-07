import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { updatePost } from '../../../lib/post'

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  
  if (req.method === 'PUT') {
    const session = await getSession({req})
    if (!session) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    try {
      const {id, ...data} = req.body
      const { post, error } = await updatePost(id, data)
      if (error) throw error
      await res.revalidate(`/posts/${id}`)
      return res.status(200).json({ post })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export default handler