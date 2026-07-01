import { useState } from "react";

import {useNavigate}from "react-router-dom";

import { loginUser}from "../features/auth/authThunk";

import {useAppDispatch,useAppSelector}from "../hooks/reduxHooks";

function LoginPage() {

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

 const dispatch =
 useAppDispatch();

 const navigate =useNavigate();

 const { loading, error} =useAppSelector( state => state.auth);

 const handleSubmit =async ( e:React.FormEvent)=>{
 e.preventDefault();
 const result = await dispatch(  loginUser({
    email,
    password
   })
  );

  if(loginUser.fulfilled.match( result)){
   navigate(
    "/dashboard"
   );
  }

 };

 return (

  <form
   onSubmit={
    handleSubmit
   }
  >

   <input
    value={email}
    onChange={(e)=>
     setEmail(
      e.target.value
     )
    }
   />

   <input
    type="password"
    value={password}
    onChange={(e)=>
     setPassword(
      e.target.value
     )
    }
   />

   <button
    disabled={
     loading
    }
   >
    Login
   </button>

   {
    error &&
    <p>
     {error}
    </p>
   }

  </form>

 );

}

export default LoginPage;