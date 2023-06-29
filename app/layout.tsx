"use client"

import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers"
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="app transition-all">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
