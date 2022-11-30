import { NextApiRequest, NextApiResponse } from "next";
import { createUser, getUsers } from "../../lib/user";

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { users, error } = await getUsers()
      if (error) throw error
      return res.status(200).json({ users })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const { user, error } = await createUser(data)
      if (error) throw error
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler