import Link from 'next/link'

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

export default function Header () {
  return (
    <header className='border-b border-gray-100 drop-shadow-sm sticky top-0 bg-white z-10'>
      <div className='max-w-screen-xl mx-auto py-5 px-5 md:px-0'>
        <div className='flex items-center justify-between'>
          <Link className='font-bold text-2xl cursor-pointer' href='/'>
            {'{'} antonio :{' '}
            <span className='text-[#2c682c]'>
              &apos;perez&apos;
            </span>{' '}
            {'}'}
          </Link>
          <div className='hidden md:block'>
            <ul className='flex items-center space-x-5 text-gray-500 font-semibold'>
              {menu.map(({key, ...m}) => <MenuItem key={key} {...m} /> )}
            </ul>
          </div>
          <div>
            <button className='bg-indigo-600 text-white rounded-lg px-4 py-2'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
