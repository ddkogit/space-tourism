import { NavLink } from "react-router-dom";
import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navItems">
      
      <NavLink to="/">00 Home</NavLink>
      <NavLink to="/destination">01 Destination</NavLink>
      <NavLink to="/crew">00 Crew</NavLink>
      <NavLink to="/technology">00 Technology</NavLink>
      
    </div>

    // 00 Home 01 Destination 02 Crew 03 TECH
    
  )
}
