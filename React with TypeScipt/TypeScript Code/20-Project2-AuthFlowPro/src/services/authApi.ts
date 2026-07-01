import { baseApi } from "./baseApi";

import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  SignupRequest,
  SignupResponse,
} from "../types/auth";
import { API } from "../utils/apiEndpoints";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (body) => {
        const payload = {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          password: body.password,
        };

        return {
          // url: "/users/add",
          url:API.SIGNUP,
          method: "POST",
          data: payload,
        };
      },
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        // url: "/auth/login",
        url: API.LOGIN,
        method: "POST",
        data: credentials,
      }),
    }),

    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (body) => ({
        // url: "/auth/refresh",
        url: API.REFRESH,
        method: "POST",
        data: body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useRefreshTokenMutation } =
  authApi;
