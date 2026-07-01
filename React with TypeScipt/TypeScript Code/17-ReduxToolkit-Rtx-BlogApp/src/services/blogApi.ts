import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Blog, CreateBlogPayload, UpdateBlogPayload } from "../types/blog";

export const blogApi = createApi({
  reducerPath: "blogApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  tagTypes: ["Blog"],

  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => "/posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map((blog) => ({
                type: "Blog" as const,

                id: blog.id,
              })),

              {
                type: "Blog",

                id: "LIST",
              },
            ]
          : [
              {
                type: "Blog",

                id: "LIST",
              },
            ],
    }),

    getBlogById: builder.query<Blog, number>({
      query: (id) => `/posts/${id}`,
      providesTags: ["Blog"],
    }),

    createBlog: builder.mutation<Blog, CreateBlogPayload>({
      query: (newBlog) => ({
        url: "/posts",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: [
        {
          type: "Blog",

          id: "LIST",
        },
      ],
    }),

    updateBlog: builder.mutation<Blog, UpdateBlogPayload>({
      query: (blog) => ({
        url: `/posts/${blog.id}`,
        method: "PUT",
        body: blog,
      }),
      onQueryStarted: async (
        updatedBlog,

        {
          dispatch,

          queryFulfilled,
        },
      ) => {
        const patchResult = dispatch(
          blogApi.util.updateQueryData(
            "getBlogs",

            undefined,

            (draft) => {
              const blog = draft.find((item) => item.id === updatedBlog.id);

              if (blog) {
                blog.title = updatedBlog.title;

                blog.body = updatedBlog.body;
              }
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (
        result,

        error,

        blog,
      ) => [
        {
          type: "Blog",

          id: blog.id,
        },
      ],
    }),

    deleteBlog: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (
        result,

        error,

        id,
      ) => [
        {
          type: "Blog",

          id,
        },
      ],
    }),
  }),
});

export const {
  useLazyGetBlogsQuery,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;

// Entrire Flow now-

// Now

// Create

// ↓

// Reload LIST

// Update

// ↓

// Reload only Blog 2

// Delete

// ↓

// Remove only Blog 3

// Much more efficient

// What is the purpose of Dynamic Tags?

// Dynamic Tags allow RTK Query to associate cached data with individual entities instead of invalidating an entire collection. This enables more efficient cache management and minimizes unnecessary network requests.

// What is the purpose of the LIST tag?

// The LIST tag represents the entire collection. It's typically invalidated after create operations because the collection itself changes.

// Why use type: "Blog" as const?

// RTK Query expects a literal string type for tags. as const ensures TypeScript treats "Blog" as a literal type instead of a general string.




// Dyanamic Tags Code- 
// providesTags: (result) =>
//   result
//     ? [
//         ...result.map((blog) => ({
//           type: "Blog" as const,

//           id: blog.id,
//         })),

//         {
//           type: "Blog",

//           id: "LIST",
//         },
//       ]
//     : [
//         {
//           type: "Blog",

//           id: "LIST",
//         },
//       ];

// create
// invalidatesTags: [
//   {
//     type: "Blog",

//     id: "LIST",
//   },
// ];

// update
// invalidatesTags: (
//   result,

//   error,

//   blog,
// ) => [
//   {
//     type: "Blog",

//     id: blog.id,
//   },
// ];

// delete
// invalidatesTags: (
//   result,

//   error,

//   id,
// ) => [
//   {
//     type: "Blog",

//     id,
//   },
// ];







//optimistic updated code:- 

// onQueryStarted: async (
//   updatedBlog,

//   {
//     dispatch,

//     queryFulfilled,
//   },
// ) => {
//   const patchResult = dispatch(
//     blogApi.util.updateQueryData(
//       "getBlogs",

//       undefined,

//       (draft) => {
//         const blog = draft.find((item) => item.id === updatedBlog.id);

//         if (blog) {
//           blog.title = updatedBlog.title;

//           blog.body = updatedBlog.body;
//         }
//       },
//     ),
//   );

//   try {
//     await queryFulfilled;
//   } catch {
//     patchResult.undo();
//   }
// };







// Manual update

// onQueryStarted: async (
//   updatedBlog,
//   {
//     dispatch,
//     queryFulfilled,
//   },
// ) => {

//   try {

//     const { data } =
//       await queryFulfilled;

//     dispatch(

//       blogApi.util.updateQueryData(

//         "getBlogs",

//         undefined,

//         (draft) => {

//           const blog =
//             draft.find(
//               (item) =>
//                 item.id === data.id
//             );

//           if (blog) {

//             blog.title =
//               data.title;

//             blog.body =
//               data.body;

//           }

//         }

//       )

//     );

//   } catch {

//     console.log(
//       "Update Failed"
//     );

//   }

// }






