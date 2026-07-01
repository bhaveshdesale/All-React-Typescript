import {createSlice} from "@reduxjs/toolkit";
import { loginUser} from "./authThunk";

interface AuthState {
 user:null;
 token:string | null;
 loading:boolean;
 error:string | null;
}


const initialState:AuthState = {
 user:null,
 token:null,
 loading:false,
 error:null
};


// Async actions go inside:
// extraReducers


// builder pattern -> builder listen to pending, fulfilled and rejected state


const authSlice=createSlice({
  name:"Auth",
  initialState,
  reducers:{
    logout:(state)=>{
      state.token=null;
      state.user=null;

    }
  },
  extraReducers:(builder)=>{
    builder.addCase(loginUser.pending,
      (state)=>{
        state.loading=true;
        state.error=null;
      }
    );
    builder.addCase(loginUser.fulfilled,

      (state, action)=>{
        state.loading=false,
         state.token=action.payload.token;
      }
    );
    builder.addCase(loginUser.rejected,
      (state, action)=>{
        state.loading=false;
        state.error=action.error.message || "Login Failed"
      }
    )

  }

})
export const {logout}= authSlice.actions
export default authSlice.reducer;

// What is extraReducers?

// Most important Redux question.

// Interview Definition:

// extraReducers allows a slice to respond to actions generated outside the slice, such as createAsyncThunk actions.

// Meaning:

// loginUser

// was created in:

// authThunk.ts

// Not inside slice.

// Need:

// extraReducers

// to listen.