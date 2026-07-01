import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout.tsx";
import DashboardLayout from "../layouts/DashboardLayout.tsx";

import Login from "../pages/Login/Login.tsx";
import Signup from "../pages/Signup/Signup.tsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.tsx";
import ResetPassword from "../pages/ResetPassword/ResetPassword.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import Profile from "../pages/Profile/Profile.tsx";
import Home from "../pages/Home/Home.tsx";
import About from "../pages/About/About.tsx";
import ProjectInfo from "../pages/ProjectInfo/ProjectInfo.tsx";
import Contact from "../pages/Contact/Contact.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Authentication Routes */}
<Route element={<PublicRoute/>}>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      </Route>

      {/* Dashboard Routes */}
       <Route
         element={<ProtectedRoute/>}
        >
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectInfo" element={<ProjectInfo />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;





// Application Starts
//         │
//         ▼
// Persist Login
//         │
//         ▼
// Restore Token
//         │
//         ▼
// Redux Updated
//         │
//         ▼
// ───────────────

// User opens /dashboard

// ↓

// ProtectedRoute

// ↓

// Authenticated?

// ↓

// YES

// ↓

// Dashboard

// ────────────────

// User opens /login

// ↓

// PublicRoute

// ↓

// Authenticated?

// ↓

// YES

// ↓

// Dashboard

// ↓

// NO

// ↓

// Login