"use client";

import Link from 'next/link'
import ThemeSwitch from '@/components/themeSwitch';

export default function Navbar() {

  return (
    <div className="flex justify-between items-center bg-opacity-0">
      <div>
      </div>
      <div className="m-2 flex flex-row">
        <Link className="px-2 py-2 hover:shadow-lg " href="/">Home</Link>
        <Link className="px-2 py-2 hover:shadow-lg " href="/aisummarizer">Ai-summarizer</Link>
        <Link className="px-2 py-2 hover:shadow-lg " href="/about">About</Link>
        <a className="px-2 py-2 hover:shadow-lg " href="https://github.com/ista1024" target="blank">Github</a>
        <ThemeSwitch />
      </div>
    </div>
  )
}
