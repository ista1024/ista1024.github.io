"use client";

import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/services/store'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="app">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
