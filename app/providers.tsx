"use client"

import { Provider } from 'react-redux'
import { store } from '@/services/store'
import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from "next-themes/dist/types"

export function Providers({ children }: ThemeProviderProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" >
        {children}
      </ThemeProvider>
    </Provider>
  )
}