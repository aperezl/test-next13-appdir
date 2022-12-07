import Link from 'next/link'
import Image from 'next/image'
// import { Tags } from './Tags'
import { getAllPosts } from '../lib/post'


export default async function FeaturePost () {
  const { posts } = await getAllPosts({ sort: 'title', order: 'desc' })
  const post = posts[0] || {}
  return (
    <section className='bg-[#ecf1ea] px-5 py-10 md:py-32'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20 md:gap-y-0 items-center'>
          <div>
            <Link href={`/posts/${post.slug}`}>
              <div className='overflow-hidden rounded-lg drop-shadow-lg'>
                <Image
                  width={1024}
                  height={1024}
                  src={`${post.image}`}
                  alt='alt'
                  className='duration-300 ease-in group-hover:scale-110'
                />

                <div className='absolute top-0 left-0 bottom-0 right-0 bg-gray-900 opacity-10 group-hover:opacity-60 duration-800 transition ease-in' />
              </div>
            </Link>
          </div>
          <div>
            <div className='flex items-center text-sm'>
              <div className='text-indigo-600'>
                {/* <Tags tags={post.tags} /> */}
              </div>
              <div>&nbsp;&nbsp;·&nbsp;&nbsp;</div>
              <div className=''>5 min read</div>
            </div>
            <Link href={`/blog/${post.slug}`} className='space-y-3 text-sm'>
              <h2 className='text-2xl md:text-4xl text-gray-900 font-semibold mb-5'>
                {post.title}
              </h2>

              <p className='text-sm md:text-lg text-gray-600 mb-5'>
                {post.excerpt}
              </p>
              <div className='text-lg text-gray-600 flex items-center space-x-2'>
                <div>Read Article</div>
              </div>
            </Link>
            <Link href='/porfolio/admin'>Editar</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
