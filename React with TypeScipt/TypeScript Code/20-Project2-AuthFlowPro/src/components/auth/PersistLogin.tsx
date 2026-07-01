import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { restoreSession } from "../../slices/authSlice";
import { authStorage } from "../../utils/auth";

interface PersistLoginProps {
  children: React.ReactNode;
}

function PersistLogin({ children }: PersistLoginProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");

    // const refreshToken = localStorage.getItem("refreshToken");

    const accessToken = authStorage.getAccessToken();

    const refreshToken = authStorage.getRefreshToken();

    if (accessToken && refreshToken) {
      dispatch(
        restoreSession({
          accessToken,
          refreshToken,
        }),
      );
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default PersistLogin;
