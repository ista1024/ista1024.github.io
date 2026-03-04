"use client";

import Link from 'next/link';
import ThemeSwitch from '@/components/themeSwitch';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sm:px-4 py-4 sm:py-8 mx-auto">
      <div>
        <Link className="px-2 py-2 hover:shadow-lg " href="/">Home</Link>
        <Link className="px-2 py-2 hover:shadow-lg " href="/about">About</Link>
      </div>
      <div className="m-2 flex flex-row">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
