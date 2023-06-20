import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Hello World. </h1>
        <Link href="/about">About</Link>
        <Link href="/aisummarizer">Ai-summarizer</Link>
      </div>
    </main>
  )
}
