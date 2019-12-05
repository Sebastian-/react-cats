import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const links = [{ path: "/", name: "Home" }];

  return (
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
