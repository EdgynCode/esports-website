import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="topnav">
      <NavLink to="/home" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/schedule" activeclassname="active">
        Schedule
      </NavLink>
      <NavLink to="/contract" activeclassname="active">
        Global Contract Database
      </NavLink>
      <NavLink to="/vct-2025" activeclassname="active">
        VCT 2025
      </NavLink>
      <NavLink to="/lol-2025" activeclassname="active">
        LoL Esports 2025
      </NavLink>
      {/* <form action="#" className="form-container">
        <div className="topnav-form">
            <input type="email" className="form-control" placeholder="Search..."/>
            <button type="submit" className="search-button">
              <i>Search</i>
            </button>
        </div>
      </form> */}
    </nav>
  );
};

export default Navbar;
