import {useEffect}from "react";

import {useNavigate}from "react-router-dom";

import { fetchUsers}from "../features/users/userThunk";

import {logout}from "../features/auth/authSlice";

import {useAppDispatch,useAppSelector}from "../hooks/reduxHooks";

function DashboardPage(){

 const dispatch =useAppDispatch();

 const navigate =useNavigate();

 const { users,loading,error}=useAppSelector( state =>state.users);

 useEffect(()=>{
  dispatch(
    fetchUsers()
  );

 },[dispatch]);

 const handleLogout=()=>{

  dispatch(
   logout()
  );

  navigate("/");

 };

 if(loading){

  return <h1>
   Loading...
  </h1>

 }

 if(error){

  return <h1>
   {error}
  </h1>

 }

 return(

  <div>

   <button
    onClick={
     handleLogout
    }
   >
    Logout
   </button>

   {
    users.map(
     user => (

      <div
       key={
        user.id
       }
      >

       <img
        src={
         user.avatar
        }
        width="100"
       />

       <h3>
        {
         user.first_name
        }
       </h3>

       <p>
        {
         user.email
        }
       </p>

      </div>

     )
    )
   }

  </div>

 );

}

export default
DashboardPage;