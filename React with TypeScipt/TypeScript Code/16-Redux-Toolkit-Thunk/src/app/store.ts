import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;


// Store Shape Now
// {
//  auth:{
//    ...
//  },

//  users:{
//    users:[],
//    loading:false,
//    error:null
//  }
// }


// Store Shape

// Now Redux looks like:

// {
//   auth: {
//     token: null,
//     loading: false,
//     error: null,
//     user: null
//   },

//   users: {
//     users: [],
//     loading: false,
//     error: null
//   }
// }