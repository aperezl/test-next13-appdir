import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { createPost } from '../../../lib/post';

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  
  if (req.method === 'POST') {
    const { title, content } = req.body;
    const session = await getSession({ req })
    console.log({ session })
    if (!session) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    try {
      const data = req.body
      const { post, error } = await createPost(data)
      if (error) throw error
      return res.status(200).json({ post })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler