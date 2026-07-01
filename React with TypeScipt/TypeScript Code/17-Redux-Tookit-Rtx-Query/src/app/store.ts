import {configureStore,} from "@reduxjs/toolkit";
import { blogApi } from "../services/blogApi";

export const store =
  configureStore({
    reducer: {
      [blogApi.reducerPath]:
        blogApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().
        concat(blogApi.middleware),
  });

export type RootState =ReturnType< typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



//   Interview Questions
// 1. Why do we add blogApi.reducer to the store?

// Answer:
// Because RTK Query needs a place inside the Redux store to keep API responses, cache, loading states, errors, and metadata.

// 2. Why do we add blogApi.middleware?

// Answer:
// To enable RTK Query features such as caching, automatic refetching, polling, cache invalidation, request deduplication, and subscription management.

// 3. Why use getDefaultMiddleware().concat() instead of replacing middleware?

// Answer:
// Because Redux Toolkit already provides important middleware like Thunk and development checks. Using concat() keeps those defaults and adds RTK Query's middleware.