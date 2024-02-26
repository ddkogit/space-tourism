import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
function Navbar({}) {

  return (
    <div className="navbar">
      <NavLink to={"/"}>00 Home</NavLink>
      <NavLink to={"/destinations"}>01 DESTINATIONS </NavLink>
      <NavLink to={"/crew"}>03 CREW</NavLink>
      <NavLink to={"/technology"}>04 TECHNOLOGY</NavLink>
    </div>
  );
}

export default Navbar;
