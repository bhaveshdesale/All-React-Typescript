import { createApi, fetchBaseQuery,} from "@reduxjs/toolkit/query/react";

import type { Blog, CreateBlogPayload } from "../types/blog";

export const blogApi = createApi({
  reducerPath: "blogApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://jsonplaceholder.typicode.com",
  }),
      tagTypes:["Blog"],


  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[],void>({
      query: () => "/posts",
        providesTags:["Blog"]

    }),

    createBlog: builder.mutation<Blog,CreateBlogPayload>({
    query: (newBlog) => ({
        url: "/posts",
        method: "POST",
        body: newBlog,
    }),
    invalidatesTags:["Blog"]

}),
  }),
});

export const {useGetBlogsQuery, useCreateBlogMutation} =blogApi

// Interview Definition

// tagTypes defines the list of cache tags that can be used by queries and mutations inside an API slice.

// What is providesTags?

// It tells RTK Query which cache tags are associated with a query's response.

// What is invalidatesTags?

// It tells RTK Query which cached data has become stale after a mutation and should be automatically refetched.

// Why do we need Tags?

// Tags allow RTK Query to automatically keep cached data synchronized after create, update, or delete operations without manually dispatching refetch actions.