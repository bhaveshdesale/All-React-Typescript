import { Routes, Route } from "react-router-dom";
import UserPage from "../components/pages/UserPage";
import UserProfilePage from "../components/pages/UserProfilePage";
import FollowersPage from "../components/pages/FollowersPage";
import FollwingPage from "../components/pages/FollwingPage";
import RepositaryPage from "../components/pages/RepositaryPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/users/:username" element={<UserProfilePage />} />
      <Route path="/users/:username/followers" element={<FollowersPage />} />
      <Route path="/users/:username/following" element={<FollwingPage />} />
      <Route path="/users/:username/repos" element={<RepositaryPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;