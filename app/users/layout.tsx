import Users from "./users";

export default async function UserLayout({ children }: any) {
  return (
    <section className="flex">
      <aside className="w-1/4">
        {/* @ts-expect-error Server Component */}
        <Users />
      </aside>
      <main>{children}</main>
    </section>
  )
}