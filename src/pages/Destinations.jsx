import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Destinations.css";
function Destinations({ destinations }) {
  console.log(destinations);

  const [currentDest, setCurrentDest]= useState(destinations[0]);

  const handleClick=(dest)=>{
      setCurrentDest(dest);
  }

  return (
    <>
      <div>01 PICK YOUR DESTINATION</div>

      <div>
        <nav className="dest-nav">
          {destinations.map((dest) => (
            <NavLink 
            onClick={()=>handleClick(dest)}
              to={`/destinations`}
              activeClassName="activeLink"
              className="alink"
            >
              {dest.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="content">
        {currentDest.name}
        {currentDest.description}
      </div>
    </>
  );
}

export default Destinations;
