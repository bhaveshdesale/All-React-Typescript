import axios from "axios";

export const apiClient = axios.create({
baseURL:import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});



// 1. Axios Interceptors ⭐⭐⭐⭐⭐

// This is probably the biggest missing production topic.

// Current Flow
// Component

// ↓

// RTK Query

// ↓

// Axios

// ↓

// Backend

// Every request manually adds

// headers:{
//  Authorization:"Bearer ..."
// }

// 😅

// Repeated everywhere.

// Production Flow
// Component

// ↓

// RTK Query

// ↓

// Axios

// ↓

// Request Interceptor ⭐

// ↓

// Backend

// Nobody adds headers manually.

// Update
// api/axios.ts
// import axios from "axios";

// export const apiClient = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     timeout: 10000,
// });
// Request Interceptor
// apiClient.interceptors.request.use(
//     (config) => {

//         const token =
//             localStorage.getItem("token");

//         if (token) {
//             config.headers.Authorization =
//                 `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// );
// Response Interceptor
// apiClient.interceptors.response.use(
//     (response) => response,

//     (error) => {

//         if (
//             error.response?.status === 401
//         ) {

//             localStorage.removeItem("token");

//             window.location.href = "/login";
//         }

//         return Promise.reject(error);
//     }
// );
// Interview

// Why use Axios Interceptors?

// Answer:

// "They centralize request and response handling. Instead of attaching tokens, logging, error handling, and refresh logic in every API call, interceptors handle it once for the entire application."