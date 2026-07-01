import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Loader from "../components/common/Loader/Loader";
const Home = lazy(() => import("../pages/Home/Home"));

const About = lazy(() => import("../pages/About/About"));

const Developers = lazy(() => import("../pages/Developers/Developers"));

const Reels = lazy(() => import("../pages/Reels/Reels"));

const Profile = lazy(() => import("../pages/Profile/Profile"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));


function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/developers"
            element={<Developers />}
          />

          <Route
            path="/reels"
            element={<Reels />}
          />

          <Route
            path="/profile/:id"
            element={<Profile />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Suspense>
  );
}


export default AppRoutes;




// Final Architecture
// Routes

// │

// ├── MainLayout

// │      │

// │      ├── Home

// │      ├── About

// │      ├── Reels

// │      ├── Developers

// │      └── Profile

// │

// └── NotFound