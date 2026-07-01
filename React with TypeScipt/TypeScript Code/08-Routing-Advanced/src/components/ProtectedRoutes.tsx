import { useAuth } from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {
  const {isLoggedIn}=useAuth();

  return isLoggedIn
   ? <Outlet/> 

  : <Navigate to='/login'/>
}

export default ProtectedRoutes
