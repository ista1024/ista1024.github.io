import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-opacity-0">
      <div>
      </div>
      <div className="m-2">
        <Link className="mx-4" href="/">Home</Link>
        <Link className="mx-4" href="/aisummarizer">Ai-summarizer</Link>
        <Link className="mx-4" href="/about">About</Link>
        <a className="mx-4" href="https://github.com/ista1024" target="blank">Github</a>
      </div>
    </div>
  )
}
