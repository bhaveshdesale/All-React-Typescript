import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Reels", path: "/reels" },
  { label: "Developers", path: "/developers" },
];

function Navbar() {
  return (
    <header>
      <nav>
        <h2>DevStream</h2>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;



// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <header>
//       <nav>
//         <h2>DevStream</h2>
//         <div className="nav-links">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/reels">Reels</NavLink>
//           <NavLink to="/developers">Developers</NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
