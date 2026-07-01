import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

// import { useAppSelector } from "../hooks/reduxHooks";

function PublicRoute() {
  // const isAuthenticated =
  //   useAppSelector(
  //     (state) => state.auth.isAuthenticated
  //   );
const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <Outlet />;
}

export default PublicRoute;