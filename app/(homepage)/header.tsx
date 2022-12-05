import Link from 'next/link'
import React from 'react'
import LoginBtn from '../../components/auth/loginBtn'

const LI = ({ path, title}: any) => {
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
          <LI path='/' title='Home' />
          <LI path='/users' title='Users' />
          <li><LoginBtn /></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header