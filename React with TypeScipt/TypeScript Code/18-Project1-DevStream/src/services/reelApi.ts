import { baseApi } from "./baseApi";

import type { ReelResponse } from "../types/reel";

export const reelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReels: builder.query<
      ReelResponse,
      {
        limit: number;

        skip: number;
      }
    >({
      query: ({
        limit,

        skip,
      }) => ({
        url: "/products",

        method: "GET",

        params: {
          limit,

          skip,
        },
      }),

      providesTags: ["Reel"],
    }),
  }),
});

export const { useGetReelsQuery } = reelApi;
