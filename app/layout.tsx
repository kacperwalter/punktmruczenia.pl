import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from './common/components/sections/navbar/navbar'
import Wrapper from './common/components/partials/wrapper/wrapper'
import Footer from './common/components/sections/footer/footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const calistoga = localFont({
  src: '../public/fonts/Calistoga-Regular.ttf',
  display: 'swap',
  variable: '--font-calistoga',
})

const freshMango = localFont({
  src: '../public/fonts/fresh-mango.woff2',
  display: 'swap',
  variable: '--font-fresh-mango',
})

export const metadata: Metadata = {
  title: 'Admin',
  description: '',
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
          ${freshMango.variable}
        `}
      >
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
        <Footer />
      </body>
    </html>
  )
}
