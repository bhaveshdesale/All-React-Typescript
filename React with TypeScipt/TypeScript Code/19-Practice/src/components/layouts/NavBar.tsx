import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Reels", path: "/reels" },
    { label: "Developers", path: "/developers" },
  ];
  return (
    <header className="header">
      <nav>
        <h2>DevStream</h2>
        {navLinks.map((links) => (
          <NavLink key={links.path} to={links.path} className="navlink">
            {links.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
 
export default NavBar;

// function NavBar() {
//   return (
//     <header>
//       <nav>
//         <h2>DevStream</h2>
//         <div className='nav-links'>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/reels">Reels</NavLink>
//            <NavLink to="/Developers">Developers</NavLink>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default NavBar
