import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"

export const store=configureStore({
  reducer:{
  todo:todoReducer
  }
})

// so store become this
// {
//  todo:{
//   todos:[]
//  }
// }


export type RootState=ReturnType<typeof store.getState>

// Automatically generates:
// {
//  todo:{
//   todos:[]
//  }
// }

// Type of dispatch.
export type AppDispatch=typeof store.dispatch;