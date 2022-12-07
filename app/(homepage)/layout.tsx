import Footer from './Footer'
import './globals.css'
import Header from './header'
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
