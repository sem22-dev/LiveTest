import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import favoritRegular from 'next/font/local'
import foggyRegular from 'next/font/local'
import Providers from '@/components/providers'
import NextTopLoader from 'nextjs-toploader';


const roboto = Roboto({
  weight: "400",
  subsets: ['latin']
})

const favoritR = favoritRegular({ src: '../public/fonts/favoritRegular.woff2', variable: "--font-favoritRegular" })
const foggyR = foggyRegular({ src: '../public/fonts/foggyRegular.woff2', variable: "--font-foggyR" })

export const metadata: Metadata = {
  title: 'EASE',
  description: 'Generated by create next app',
}



export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en">
      <body className={` ${favoritR.variable} ${foggyR.variable} font-favoritR`}>
        <Providers session={session}>
        <NextTopLoader   color="#4BDE80"   showSpinner={false}/>
          <Navbar />
          {children}
          <Footer />
          </Providers>
      </body>
    </html>
  )
}
