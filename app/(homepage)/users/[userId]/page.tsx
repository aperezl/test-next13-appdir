import { getUserById, getUsers } from "../../../../lib/user"
import { Suspense } from "react";

export const dynamicParams = true

export async function generateStaticParams() {
  const { users } = await getUsers()
  return users?.map(user => ({ userId: user.id }))
}

import User from './user'
interface Props {
  params: {
    userId: string
  }
}
export default async function UserPage({ params }:Props) {
  const { user } = await getUserById(params.userId)
  if (!user) return <h1>Not Found</h1>

  return (
    <>
       <Suspense fallback={<p>Loading feed...</p>}>
      <User user={user} />
      </Suspense>
    </>
  )
}