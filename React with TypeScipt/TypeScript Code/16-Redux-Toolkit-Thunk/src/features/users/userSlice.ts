import {
 createSlice
}
from "@reduxjs/toolkit";

import {
 type User
}
from "../../type/user";


import { fetchUsers } from "./userThunk";

interface UserState {

 users:User[];

 loading:boolean;

 error:string | null;

}

const initialState:
UserState = {

 users:[],

 loading:false,

 error:null

};

const userSlice =
createSlice({

 name:"users",

 initialState,

 reducers:{},

 extraReducers:
 (builder)=>{

  builder.addCase(

   fetchUsers.pending,

   (state)=>{

    state.loading=true;

    state.error=null;

   }

  );

  builder.addCase(

   fetchUsers.fulfilled,

   (state,action)=>{

    state.loading=false;

    state.users=
    action.payload

   }

  );

  builder.addCase(

   fetchUsers.rejected,

   (state,action)=>{

    state.loading=false;

    state.error=
    action.error.message
    ||
    "Failed";

   }

  );

 }

});

export default userSlice.reducer;



// Dashboard
//      ↓

// dispatch(
//  fetchUsers()
// )

//      ↓

// userThunk

//      ↓

// userService

//      ↓

// API

//      ↓

// fulfilled

//      ↓

// userSlice

//      ↓

// Store

//      ↓

// UI Re-render