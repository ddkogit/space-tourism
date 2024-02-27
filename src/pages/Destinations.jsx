import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Destinations.css";

function Destinations({ destinations,background,setBg }) {
  const [currentDest, setCurrentDest] = useState(destinations[0]);
  console.log(currentDest.images.png);

  const handleClick = (dest) => {
    setCurrentDest(dest);
  };

  useEffect(()=>{
    setBg (background)
  },[]);


  return (
    <>
      <div>01 PICK YOUR DESTINATION</div>

      <div>
        <nav className="dest-nav">
          {destinations.map((dest) => (
            <NavLink
              onClick={() => handleClick(dest)}
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

        <img src={currentDest.images.png} alt={currentDest.name} />
      </div>
    </>
  );
}

export default Destinations;
