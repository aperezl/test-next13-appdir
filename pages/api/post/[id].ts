import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { updatePost } from '../../../lib/post'

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  
  const session = await getSession({req})
  if (!session) {
    return res.status(401).send({ message: 'Unauthorized' })
  }
  
  if (req.method === 'PUT') {
    const {id, ...data} = req.body
    try {
      console.log({ body: req.body })
      const { post, error } = await updatePost(id, data)
      console.log({ post, error })
      if (error) throw error
      res.status(200).json({ post })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
    return true
  }
}

export default handler