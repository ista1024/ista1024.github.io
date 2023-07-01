"use client";
import { useEffect, useState } from "react"
import Image from "next/image"
import { useLazyGetSummaryQuery } from "@/services/article";
import useLocalStorage from "@/hooks/useLocalStorage";

type Article = {
  url: string,
  summary: string
}

const envRapidApiKey = process.env.NEXT_PUBLIC_RAPID_API_ARTICLE_KEY;

const Demo = () => {
  const [article, setArticle] = useState<Article>({
    url: '',
    summary: ''
  })
  const [articles, setArticles] = useLocalStorage<Article[]>('articles', [])
  // Keep allArticles for avoid hydration mismatch.
  const [allArticles, setAllArticles] = useState<Article[]>([])
  const [copied, setCopied] = useState('')
  const [rapidApiKey, setRapidApiKey] = useState(envRapidApiKey)
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  useEffect(() => {
    // To avoid hydration mismatch, set articles in useEffect.
    setAllArticles(articles)
  }, [])

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { data } = await getSummary({ articleUrl: article.url, rapidApiKey })

    if (data?.summary) {
      const newArticle = { ...article, summary: data?.summary || '' }
      const updatedAllArticle = [newArticle, ...allArticles]

      setArticle(newArticle)
      setAllArticles(updatedAllArticle)
      setArticles(updatedAllArticle)
    }
  }

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => setCopied(''), 1500)
  }

  return (
    <section className="mt-16 w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full gap-2 max-w-xl">
        <div>
          <input
            className="url_input"
            type="text"
            placeholder="Rapid Api Key"
            value={rapidApiKey || ''}
            onChange={(e) => {
              setRapidApiKey(e.target.value)
            }}
            required
          />
          <a
            className="m-1"
            target="_blank"
            href="https://rapidapi.com/restyler/api/article-extractor-and-summarizer"
            rel="noopener noreferrer"
          >
            <p>Get API key from rapidapi</p>
          </a>
        </div>
        <form className="relative flex justify-center items-center"
          onSubmit={handleSubmit}>
          <Image
            className="absolute left-0 my-2 ml-3 w-5"
            src="/link.svg"
            alt="link_icon"
            width={28}
            height={37}
            priority
          />
          <input
            className="url_input peer"
            type="url"
            placeholder="Enter a URL"
            value={article?.url || ''}
            onChange={(e) => setArticle({ ...article, url: e.target.value || '' })}
            required
          />
          <button
            type="submit"
            className="submit_btn
             peer-focus:border-gray-700
             peer-focus:text-gray-700"
          >
            🔎
          </button>
        </form>
        {/* Browse URL History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div
                className="copy_btn"
                onClick={() => handleCopy(item.url)}
              >
                <Image
                  className="w-[40%] h-[40%] object-contain"
                  src={copied === item.url ? "/tick.svg" : "/copy.svg"}
                  alt="copy"
                  width={28}
                  height={37}
                  priority
                />
              </div>
              <p className="flex-1 text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Display Result */}
      <div className="m-10 max-w-xl flex justify-center items-center">
        {isFetching ? (
          <Image
            className="w-20 h-20 object-contain"
            src="/loader.svg"
            alt="loader"
            width={28}
            height={37}
            priority
          />
        ) : error ? (
          /**
           * At this point, it could be an error from the server (FetchBaseQueryError)
           * or just any error thrown by code you wrote (SerializedError, e.g. in query, queryFn, transformResponse etc.)
           *  - and that could have a completely different shape.
           * https://stackoverflow.com/questions/70017789/react-redux-how-to-handle-errors-in-rtk-queries-mutation-typescript
           */
          <p className="font-inter font-bold text-black text-center">
            {`Well, that wasn't suppoered to happen...`}
            <br />
            <span className="font-normal text-gray-700">
              {/* TypeScript will handle it as `FetchBaseQueryError` from now on. */}
              {"data" in error && error?.data?.message}
            </span>
          </p>
        ) : (
          article?.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600 dark:text-gray-200 text-lx">
                {`Article `}
                <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700 dark:text-gray-300">
                  {article?.summary || ''}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo
