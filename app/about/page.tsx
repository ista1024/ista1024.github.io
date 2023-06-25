import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div className="contents">
        <h1 className="head_text">About</h1>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  )
}
