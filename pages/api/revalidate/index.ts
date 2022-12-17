import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  
  const session = await getSession({req})
  if (!session) {
    return res.status(401).send({ message: 'Unauthorized' })
  }

  console.log('ENV:', process.env.NODE_ENV)
  
  if (req.method === 'PUT') {
    const { path } = req.body
    if (process.env.NODE_ENV === 'development') {
      console.log(`not revaliate ${path} in dev mode`)
      return res.status(200).json({ path })
    }

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