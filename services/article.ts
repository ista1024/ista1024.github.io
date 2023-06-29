"use client";

import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/**
 * I found the answer for your question here written by Phry as well :) ,
 * If you know the format that will be returned with all non-2xx-status responses from your server, you could just cast your
 * fetchQuery as BaseQueryFn<string | FetchArgs, unknown, YourErrorType, {}>.
 * https://github.com/rtk-incubator/rtk-query/issues/86#issuecomment-738845312
 */

interface CustomError {
  data: {
    message: string,
    stack: string
  },
  status: number
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => {
        return {
          url: `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
          headers: {
            'X-RapidAPI-Key': params.rapidApiKey,
            'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
          }
        }
      },
    })
  }),
})

export const { useLazyGetSummaryQuery } = articleApi
