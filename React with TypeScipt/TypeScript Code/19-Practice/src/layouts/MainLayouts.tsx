import { Outlet } from "react-router-dom"
import NavBar from "../components/layouts/NavBar"
import Footer from "../components/layouts/Footer"

function MainLayouts() {
  return (
    <div className="layout">
      <NavBar/>

      <main className="main-content">
        <Outlet/>
      </main>
      
      <Footer/>
    </div>
  )
}

export default MainLayouts
