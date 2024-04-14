import type { Metadata } from "next"
import { Open_Sans, Quattrocento } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800']
})

const quattrocento = Quattrocento({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quattrocento',
  weight: ['400', '700']
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
          ${quattrocento.variable}
        `}
      >
        {children}
      </body>
    </html>
  )
}
