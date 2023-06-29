"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { RiComputerFill, RiSunFill, RiMoonFill } from "react-icons/ri";


const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex justify-center items-center mx-4"><button onClick={() => setTheme("system")}><RiComputerFill /></button></div>
  }

  return (
    <div className="flex justify-center items-center mx-4">
      {
        resolvedTheme === 'dark'
          ? <button onClick={() => setTheme('light')}><RiSunFill /></button>
          : <button onClick={() => setTheme('dark')}><RiMoonFill /></button>
      }
    </div>
  )
}

export default ThemeSwitch
