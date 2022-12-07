import Link from 'next/link'
import React from 'react'

interface Imenu {
  key: string
  path: string
  title: string
}

const menu:Imenu[] = [
  { key: 'home', path: '/', title: 'Home' },
  { key: 'users', path: '/users', title: 'Users' },
  { key: 'posts', path: '/posts', title: 'Posts' }
]

const MenuItem = ({ path, title}: any) => {
  return (
    <li>
      <Link 
        className='text-sm font-medium uppercase text-amber-700'
        href={path}
      >
        {title}
      </Link>
    </li>
  )
}
const Header = () => {
  return (
    <header className='bg-stone-100 py-12'>
      <nav className='center'>
        <ul className='flex justify-center gap-8'>
          {menu.map(({key, ...m}) => <MenuItem key={key} {...m} /> )}
        </ul>
      </nav>

    </header>
  )
}

export default Header