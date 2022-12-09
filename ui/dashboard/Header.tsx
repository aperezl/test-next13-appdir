import Link from "next/link";
import { ReactNode } from "react";
import LoginBtn from "../../components/auth/loginBtn";

export default function Header() {
  return (
    <header className="z-40 items-center w-full h-16 bg-white dark:bg-gray-700 rounded-md">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">Dashboard</div>
          <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <Link href={'/dashboard'} className="relative block">
              <img src="https://www.tailwind-kit.com/images/person/1.jpg" alt="xx" className="mx-auto object-cover rounded-full h-10 w-10" />
            </Link>
            <LoginBtn />
          </div>

        </div>
      </div>
    </header>
  )
}