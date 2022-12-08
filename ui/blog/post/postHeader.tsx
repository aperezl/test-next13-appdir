import Link from "next/link"

export function Category() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-3">
        <Link
          className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-emerald-700"
          href={'/'}
        >
          Personal Growth
        </Link>
      </div>
    </div>
  )
}

export function Title({title}: {title: string}) {
  return (
    <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
      {title}
    </h1>
  )
}

export function Author() {
  return (
    <div className="flex justify-center mt-3 space-x-3 text-gray-500">
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0 w-10 h-10">
          <img  className="rounded-full" src="https://avatars.githubusercontent.com/u/1758349?v=4" alt="Antonio Perez"/>
        </div>
        <div>
          <p className="text-gray-800 dark:text-gray-400">
            <Link href={'/'}>
              Antonio Perez
            </Link>
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <time className="text-gray-500 dark:text-gray-400" dateTime="2022-12-07T15:16:00.000Z">
              Diciembre 04, 2022
            </time>
            <span>
              · 15 min read 
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  title: string
}

export default function PostHeader({ title }: Props) {
  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="max-w-screen-md mx-auto">
        <Category />
        <Title title={title} />
        <Author />
      </div>
    </div>
  )
}