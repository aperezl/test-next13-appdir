import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { updatePost } from '../../../lib/post'

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  
  const session = await getSession({req})
  if (!session) {
    return res.status(401).send({ message: 'Unauthorized' })
  }
  
  if (req.method === 'PUT') {
    const { path } = req.body
    console.log(`revalidating... ${path}`)

    try {
      await res.revalidate(path)
      console.log(`revalidate: ${path}`)
      res.status(200).json({ path })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
    return true
  }
}

export default handler