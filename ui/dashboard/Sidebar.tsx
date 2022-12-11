import Link from "next/link"
import { IconType } from 'react-icons'
import { MdDashboard, MdOutlineArticle, MdBuild } from 'react-icons/md'
const NavItem = ({path='', title='', Icon}:{ path: string, title: string, Icon: IconType}) => {
  const activeClass = 'flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800'
  const normalClass = ''
  return (
    <Link href={path} className='flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"'>
      <Icon size={24} />
      <span className="mx-4 text-sm font-normal">{title}</span>
    </Link>
  )
}

export default function Sidebar() {
  return (
    <div className="relative hidden h-screen my-2 ml-4 lg:block w-80">
      <nav className="h-full bg-white rounded-md dark:bg-gray-700">
        <NavItem path={'/dashboard'} title='dashboard' Icon={MdDashboard} />
        <NavItem path={'/dashboard/posts'} title='posts' Icon={MdOutlineArticle} />
        <NavItem path={'/dashboard/config'} title='config' Icon={MdBuild} />
      </nav>
    </div>
  )
}