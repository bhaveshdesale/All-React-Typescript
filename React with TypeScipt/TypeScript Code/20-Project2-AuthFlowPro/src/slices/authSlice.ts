import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { User } from "../types/user";

interface AuthState {
  user: User | null;

  accessToken: string | null;

  refreshToken: string | null;

  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,

  accessToken: null,

  refreshToken: null,

  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

 reducers: {
  setCredentials: (
    state,
    action: PayloadAction<{
      accessToken: string;
      refreshToken: string;
    }>
  ) => {
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
    state.isAuthenticated = true;
  },

  setUser: (
    state,
    action: PayloadAction<User>
  ) => {
    state.user = action.payload;
  },

  restoreSession: (
    state,
    action: PayloadAction<{
      accessToken: string;
      refreshToken: string;
    }>
  ) => {
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
    state.isAuthenticated = true;
  },

  logout: (state) => {
    state.user = null;
    state.accessToken = null;
    state.refreshToken = null;
    state.isAuthenticated = false;
  },
},
});

export const {setUser, restoreSession, setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
