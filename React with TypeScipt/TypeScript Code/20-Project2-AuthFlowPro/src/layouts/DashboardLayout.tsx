import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function DashboardLayout() {
  return (
    <main className="dashboard-layout">
      <NavBar />

      {/* Sidebar */}

      <Outlet />

      <Footer />
    </main>
  );
}

export default DashboardLayout;
