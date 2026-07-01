import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import type { AxiosError, AxiosRequestConfig } from "axios";

import { apiClient } from "../api/axios";

type AxiosBaseQueryArgs = {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
};

export const axiosBaseQuery = (): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method = "GET", data, params }) => {
    try {
      const result = await apiClient({
        url,
        method,
        data,
        params,
      });

      return {
        data: result.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;

      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data ?? axiosError.message,
        },
      };
    }
  };



//   🎯 What You've Learned

// You now understand something that many React developers skip:

// RTK Query

// does NOT depend on fetch.

// It depends on

// BaseQueryFn.

// fetchBaseQuery is simply the default implementation.

// We replaced it with an Axios implementation that fits the same interface. This gives us all the benefits of Axios while keeping RTK Query's caching, invalidation, polling, lazy queries, and generated hooks