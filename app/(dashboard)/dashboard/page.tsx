import { authOptions } from "../../../pages/api/auth/[...nextauth]"

import { unstable_getServerSession } from "next-auth/next"
import { Table } from "./table"
import { getAllPosts, Post } from "../../../lib/post"
import { Suspense } from "react"

export default async function Dashboard(context:any) {
  const session = await unstable_getServerSession(authOptions)
  if (!session) return <>Not Authorized</>
  const data = await getAllPosts()

  return (
    <>
      Dasboard
      <Suspense fallback={<h1>Loading...</h1>}>
        <Table posts={ data.posts } />
      </Suspense>
    </>
  )
}