import { authOptions } from "../../../pages/api/auth/[...nextauth]"

import { unstable_getServerSession } from "next-auth/next"
import { Table } from "./table"
import { getAllPosts, Post } from "../../../lib/post"
import LoginBtn from "../../../components/auth/loginBtn"

export default async function Dashboard({ searchParams }: any) {
  const session = await unstable_getServerSession(authOptions)
  if (!session) return <>Not Authorized<LoginBtn /></>

  const { order, sort } = searchParams
  const { posts, error } = await getAllPosts({ sort, order })
  if (error) return <>Error loading data</>
  

  return (
    <>
      Dasboard
        <Table posts={ posts } sort={{ field: sort, order }} />
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    </>
  )
}