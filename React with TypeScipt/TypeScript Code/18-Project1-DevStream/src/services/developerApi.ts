import { baseApi } from "./baseApi";
import type { DeveloperResponse } from "../types/developer";
import type { Developer } from "../types/developer";
export const developerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDevelopers: builder.query<DeveloperResponse, void>({
      query: () => ({
        url: "/users",

        method: "GET",
      }),

      providesTags: (result) =>
        result
          ? [
              ...result.users.map((developer) => ({
                type: "Developer" as const,
                id: developer.id,
              })),
              {
                type: "Developer",
                id: "LIST",
              },
            ]
          : [
              {
                type: "Developer",
                id: "LIST",
              },
            ],
    }),
    getDeveloper: builder.query<Developer, number>({
      query: (id) => ({
        url: `/users/${id}`,

        method: "GET",
      }),

      providesTags: (
        result,

        error,

        id,
      ) => [
        {
          type: "Developer",

          id,
        },
      ],
    }),
    getDevelopersBySearch: builder.query<DeveloperResponse, string>({
      query: (searchTerm) => ({
        url: "/users/search",
        method: "GET",
        params: {
          q: searchTerm,
        },
      }),
    }),
  }),
});

export const {useGetDevelopersBySearchQuery, useGetDeveloperQuery, useGetDevelopersQuery } = developerApi;
