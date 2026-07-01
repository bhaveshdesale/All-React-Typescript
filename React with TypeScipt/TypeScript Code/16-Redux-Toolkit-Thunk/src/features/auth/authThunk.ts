import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginPayload } from "../../type/auth";
import { login } from "../../services/authService";

export const loginUser=createAsyncThunk("auth/loginUser", 
  async (credentials:LoginPayload)=>{
    return await login(credentials);
  }
)

// What Happens Here?

// When UI does:

// dispatch(
//  loginUser({
//   email,
//   password
//  })
// )

// Redux automatically creates:

// auth/loginUser/pending

// Loading.

// Then:

// auth/loginUser/fulfilled

// Success.

// Or:

// auth/loginUser/rejected

// Failure.