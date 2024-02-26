import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
function Navbar({}) {

  return (
    <div className="navbar">
      <NavLink to={"/"}>00 Home</NavLink>
      <NavLink to={"/destination"}>01 DESTINATION </NavLink>
      <NavLink to={"/crew"}>03 CREW</NavLink>
      <NavLink to={"/technology"}>04 TECHNOLOGY</NavLink>
    </div>
  );
}

export default Navbar;
