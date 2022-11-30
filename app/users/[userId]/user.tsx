
interface Props {
  user: {
    name?: string
    email?: string
  }

}

export default function UserComponent({ user }: Props) {
  return (
    <section className="m-4 p-4">
      <div className="center">
        <h1 className="text-xl font-bold">
          {user.name}
        </h1>
        <p className="text-sm text-stone-600">
          {user.email}
        </p>
      </div>
    </section>
  )
}