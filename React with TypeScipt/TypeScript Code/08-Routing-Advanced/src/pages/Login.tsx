import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

function Login() {
 const {login}= useAuth();

const navigate= useNavigate();

  const handleLogin=()=>{
    login();
navigate(
  "/dashboard/profile"
)
  
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Login
