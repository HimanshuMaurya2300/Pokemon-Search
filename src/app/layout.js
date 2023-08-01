"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Pokemon App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <RecoilRoot>
          <Navbar />
          {children}
          <Footer />
        </RecoilRoot>

      </body>
    </html>
  )
}