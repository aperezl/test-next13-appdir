'use client'
import Providers from "./providers"
import './dashboard/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Providers refetchOnWindowFocus={false}>
        <body>
          <h1>Dashboard</h1>
          {children}
          </body>
      </Providers>
    </html>
  )
}
