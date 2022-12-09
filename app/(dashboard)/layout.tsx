import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth/next"
import LoginBtn from "../../components/auth/loginBtn"

import Providers from "./providers"
import './globals.css'
import Base from "../../ui/dashboard/Base"

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
          <Base>
            {children}
          </Base>
        </body>
      </Providers>
    </html>
  )
}
