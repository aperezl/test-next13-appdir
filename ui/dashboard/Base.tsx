import { ReactNode } from 'react'
import Main from './Main'

export default function Base({ children, }: { children: ReactNode }) {
  return (
    <div className="flex-col justify-center flex gap-4 items-start ">
      <div className="w-full mx-auto">
        <div>
          <Main>
            {children}
          </Main>
        </div>
      </div>
    </div>
  )
}