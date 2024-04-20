import type { Metadata } from "next"
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800']
})

const calistoga = localFont({
  src: '../public/fonts/Calistoga-Regular.ttf',
  display: 'swap',
  variable: '--font-calistoga',
})

export const metadata: Metadata = {
  title: "Admin",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body
        className={`
          ${openSans.variable}
          ${calistoga.variable}
        `}
      >
        {children}
      </body>
    </html>
  )
}
