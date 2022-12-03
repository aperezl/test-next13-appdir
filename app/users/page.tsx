import Users from "./users";

// export const dynamicParams = true
// export async function generateStaticParams() {
//   return []
// }
export default function About() {
  return (
    <>
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="mb-3 text-2xl font-semibold tracking-normal">Users</h1>
        <p>Select a User</p>
        {/* @ts-expect-error Server Component */}
        <Users />
      </div>
    </>
  )
}