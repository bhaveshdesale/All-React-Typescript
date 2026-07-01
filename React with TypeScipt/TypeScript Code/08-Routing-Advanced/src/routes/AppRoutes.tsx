import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";

import Profile from "../pages/Profile";
import Settings from "../pages/Setting";

import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoutes from '../components/ProtectedRoutes';
function AppRoutes() {
  return (
    <Routes>
        <Route path='/' 
        element={<Home/>}/>

        <Route path='/login'
        element={<Login/>}/>

        <Route path='/courses'
        element={<Courses/>}/>

        <Route path='/courses/:id'
        element={<CourseDetails/>}/>

        <Route element={
          <ProtectedRoutes/>
        }>
          <Route path='/dashboard' 
          element={<DashboardLayout/>}/>

          <Route path='profile'
          element={<Profile/>}/>

          <Route path='settings'
          element={<Settings/>}>
            
          </Route>
          

        </Route>

    </Routes>
  )
}

export default AppRoutes
