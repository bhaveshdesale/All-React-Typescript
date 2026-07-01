import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { logout } from "../../slices/authSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { authStorage } from "../../utils/auth";

function LogoutButton() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    authStorage.clear();

    toast.success("Logged out successfully");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;