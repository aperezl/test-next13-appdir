// export const revalidate = 60;

export default function UserLayout({ children }: any) {
  return (
    <section className="flex">
      <aside className="w-1/4">
        ----
      </aside>
      <main>
        {children}
      </main>
    </section>
  )
}