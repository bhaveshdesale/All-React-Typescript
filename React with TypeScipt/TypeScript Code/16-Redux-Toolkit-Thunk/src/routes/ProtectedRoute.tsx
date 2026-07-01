import { useAppSelector } from "../hooks/reduxHooks"
import { Navigate } from "react-router-dom";

interface Props{
  children:React.ReactNode
}

function ProtectedRoute({children}:Props) {
 const token= useAppSelector(state=> state.auth.token);
  if(!token){
    return(
      <Navigate to="/"/>

    )

  }
  return children
}

export default ProtectedRoute
