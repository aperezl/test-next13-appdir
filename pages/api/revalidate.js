import { getUsers } from '../../lib/user'
 
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    await res.revalidate('/users')
    const { users } = await getUsers()
    const promises = users.map(user => new Promise((resolve => {
      res.revalidate(`/users/${user.id}`)
      resolve()
    })))
    Promise.all(promises)
      .then(res.json({ revalidated: true, users }))
      .catch(err => res.status(500).send('Error revalidating'))
    return res.json({ revalidated: true, users });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err)
    return res.status(500).send('Error revalidating');
  }
}