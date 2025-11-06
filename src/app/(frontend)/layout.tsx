import React from 'react'
import { Open_Sans } from 'next/font/google'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
