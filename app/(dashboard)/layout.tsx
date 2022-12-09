import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth/next"
import LoginBtn from "../../components/auth/loginBtn"

import Providers from "./providers"
import './dashboard/globals.css'

const NotAuthorized = () => {
  return (
    <html>
      <Providers refetchOnWindowFocus={false}>
        <body>
          <LoginBtn />
          </body>
      </Providers>
    </html>
  )
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await unstable_getServerSession(authOptions)
  if (!session) return <NotAuthorized />

  return (
    <html>
      <Providers refetchOnWindowFocus={false}>
        <body>
          <h1>Dashboard</h1>
          <LoginBtn />
          {children}
          </body>
      </Providers>
    </html>
  )
}
