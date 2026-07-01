import axios from "axios";

import { BASE_URL } from "../utils/constants";
import { authStorage } from "../utils/auth";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("accessToken");
    const token = authStorage.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // const refreshToken = localStorage.getItem("refreshToken");
        const refreshToken = authStorage.getRefreshToken();
        const response = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        // localStorage.setItem("accessToken", newAccessToken);
        authStorage.setTokens(newAccessToken, refreshToken!);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch {
        // localStorage.clear();
        authStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

// User Opens Dashboard

// ↓

// GET /auth/me

// ↓

// Access Token Expired

// ↓

// 401

// ↓

// Response Interceptor

// ↓

// Refresh Token API

// ↓

// New Access Token

// ↓

// Save LocalStorage

// ↓

// Retry Original Request

// ↓

// Dashboard Loads

// Authentication Flow

// Login

// ↓

// Access Token

// ↓

// Redux

// ↓

// LocalStorage

// ↓

// Request Interceptor

// ↓

// Protected API

// ↓

// 401?

// ↓

// NO
// ↓

// Return Data

// ──────────────

// YES

// ↓

// Response Interceptor

// ↓

// Refresh Token

// ↓

// Retry Original Request

// ↓

// Return Data

// ──────────────

// Refresh Failed

// ↓

// Logout

// ↓

// Login
