import { useAppDispatch } from "@/hooks/reduxHooks";
import { logout } from "@/slices/authSlice";
import { authStorage } from "@/utils/auth";
import { ROUTES } from "@/utils/constants";
import { useNavigate } from "react-router-dom";



function QuickActions() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleProfile = () => {
    navigate(ROUTES.PROFILE);
  };

  const handleLogout = () => {
    authStorage.clear();

    dispatch(logout());

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  };

  return (
    <section>
      <h2>Quick Actions</h2>

      <div>
        <button onClick={handleProfile}>
          My Profile
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default QuickActions;