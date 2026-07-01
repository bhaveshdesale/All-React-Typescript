import { baseApi } from "./baseApi";

import type { User, UpdateUserRequest } from "../types/user";

import { setUser } from "../slices/authSlice";
import { API } from "@/utils/apiEndpoints";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
      query: () => ({
        // url: "/auth/me",
        url:API.CURRENT_USER,
        method: "GET",
      }),

      providesTags: ["User"],

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setUser(data));
        } catch {
          // Error handled by RTK Query
        }
      },
    }),

    updateProfile: builder.mutation<User, UpdateUserRequest>({
      query: (body) => ({
        // url: "/users/1",
       url: `/users/${body.id}`,
        method: "PUT",
        data: body,
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetCurrentUserQuery, useUpdateProfileMutation } = userApi;

// What is onQueryStarted?

// Think of it like this:

// RTK Query starts API

//         ↓

// onQueryStarted()

//         ↓

// API finishes

//         ↓

// queryFulfilled

//         ↓

// Redux Updated

// It is a lifecycle method provided by RTK Query.

// Instead of every component doing

// useEffect(() => {
//     dispatch(setUser(user));
// }, [user]);

// we centralize it inside the API.

// This is a much cleaner architecture.
