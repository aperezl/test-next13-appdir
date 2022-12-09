import { Table } from "./table"
import { getAllPosts } from "../../../../lib/post"

export default async function Dashboard({ searchParams }: any) {
  
  const { order, sort } = searchParams
  const { posts, error } = await getAllPosts({ sort, order })
  if (error) return <>Error loading data</>
  

  return (
    <>
        <Table posts={ posts } sort={{ field: sort, order }} />
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    </>
  )
}