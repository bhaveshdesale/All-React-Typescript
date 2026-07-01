import Login from "./Login"
import {type ProfileProps } from "./Profile"

type PrivateProps={
  isLoggedIn:boolean,
  component:React.ComponentType<ProfileProps>
}

function Private({isLoggedIn, component:Component}:PrivateProps ) {
 if(isLoggedIn){
  return <Component name="Bhavesh"/>

 }
 else{
  return <Login/>
 }
}

export default Private
