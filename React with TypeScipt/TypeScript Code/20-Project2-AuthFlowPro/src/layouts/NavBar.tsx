import { NavLink } from "react-router-dom";

import LogoutButton from "../components/auth/LogoutButton";

function NavBar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "ProjectInfo", path: "/projectInfo" },
    { label: "Contact", path: "/contact" },
    { label: "About", path: "/about" },
  ];

  return (
    <header>
      <nav>
        <h1>AuthFlo Pro</h1>

        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.label}
          </NavLink>
        ))}

        <LogoutButton />
      </nav>
    </header>
  );
}

export default NavBar;
