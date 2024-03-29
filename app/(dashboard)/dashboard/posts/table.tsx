'use client'
import Link from "next/link"
import { Post } from "../../../../lib/post"

// export const TableWrapper = () => {
//   return (
//     <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
//       <div className="flex flex-col justify-center h-full">
//         <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
//           <header className="px-5 py-4 border-b border-gray-100">
//             <h2 className="font-semibold text-gray-800">Customers</h2>
//           </header>
//           <div className="p-3">
//             <div className="overflow-x-auto">
//               <Table />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export const THead = ({ field, order } : SortProps) => {
  return (
    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">authorId</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">
            <Link href={`/dashboard?sort=title&order=${order === 'desc' ? 'asc' : 'desc'}`}>
              Title{order}
            </Link>
          </div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">published</div>
        </th>
      </tr>
    </thead>
  )
}

export const TR = ({ id, title, published, author }: any) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img className="rounded-full" src={author?.image} width="40" height="40" alt={author?.name} />
          </div>
          <div className="font-medium text-gray-800">{author?.name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{title}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{published ? 'published' : 'draft'}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <Link href={`/dashboard/posts/${id}`}>Edit</Link>
      </td>
    </tr>
  )
}

export const TBody = ({ posts }: { posts: Post[] }) => {
  return (
    <tbody className="text-sm divide-y divide-gray-100">
      {posts.map(post => <TR key={post.id} {...post} /> )}
    </tbody>
  )
}

interface SortProps {
  field?: string
  order?: string
}

interface Props {
  posts: Post[]
  sort?: SortProps
}

export const Table = ({ posts, sort }: Props ) => {
  return (
    <table className="table-auto w-full">
      <THead {...sort} />
      <TBody posts={ posts } />
    </table>
  )
}