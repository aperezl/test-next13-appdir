import avatar from '../public/images/avatar.png'
import Image from 'next/image'

interface Props {
  slogan: string
  name: string
  body: string
}

export default function Hero ({ slogan, name, body }: Props) {
  return (
    <div className='bg-gradient-to-tr  from-[#1a3f1d] to-[#2c682c] z-0 pt-24'>
      <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
        <section className='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
          <div className='lg:w-7/12 flex flex-col justify-center sm:text-center lg:text-right lg:py-4 xl:py-6'>
            <p className='text-[#c5e5b4] md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
              {slogan}
            </p>

            <h1 className='text-[#ecf1ea] text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
              {name}
            </h1>

            <p className='lg:ml-52 text-[#c5e5b4] xl:text-lg mb-8 md:mb-12 lg:text-right'>
              {body}
            </p>
          </div>

          <div className='lg:w-4/12 h-48 md:h-auto overflow-hidden flex justify-center items-center'>
            <div className='border-4 w-64 h-64 rounded-full border-[#c5e5b4] '>
              <Image src={avatar} className='rounded-full bg-[#c5e5b4]' alt={''} />
            </div>
          </div>
        </section>
      </div>
      <div>
        <svg
          className='relative h-24 w-full'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(255,255,255,0.7'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(255,255,255,0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(255,255,255,0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#ecf1ea' />
          </g>
        </svg>
      </div>
    </div>
  )
}
