import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="topnav">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/schedule" activeClassName="active">Schedule</NavLink>
      <NavLink to="/contract" activeClassName="active">Global Contract Database</NavLink>
    </nav>
  );
};

export default Navbar;
