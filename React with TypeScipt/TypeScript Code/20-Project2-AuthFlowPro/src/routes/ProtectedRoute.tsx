import { Navigate, Outlet } from "react-router-dom";

// import { useAppSelector } from "../hooks/reduxHooks";
import { useAuth } from "@/hooks/useAuth";

function ProtectedRoute() {
  // const isAuthenticated =
  //   useAppSelector(
  //     (state) => state.auth.isAuthenticated
  //   );
const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;