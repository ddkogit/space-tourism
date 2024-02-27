import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Destinations.css";

function Destinations({ destinations, background, setBg }) {
  const [currentDest, setCurrentDest] = useState(destinations[0]);
  console.log(currentDest.images.png);

  const handleClick = (dest) => {
    setCurrentDest(dest);
  };

  useEffect(() => {
    setBg(background);
  }, []);

  return (
    <>
      <div className="containerdest">
        <div className="leftdest">
          <div className="h5 desttitle">01 PICK YOUR DESTINATION</div>{" "}
          <img
            className="imgdest"
            src={currentDest.images.png}
            alt={currentDest.name}
          />
        </div>

        <div className="rightdest">
          <nav className="dest-nav navtext">
            {destinations.map((dest) => (
              <NavLink
                onClick={() => handleClick(dest)}
                to="#"
                className="heading1 alink"
                
              >
                {dest.name}
              </NavLink>
            ))}
          </nav>
          <div className="content">
            <div className="h2">{currentDest.name}</div>
            <div className="desc">{currentDest.description}</div>

            <div className="info">
              <div>
                <p className="subheading2">AVG. DISTANCE</p>
                <p className="subheading1">{currentDest.distance}</p>
              </div>
              <div>
                <p className="subheading2">EST. TRAVEL TIME</p>
                <p className="subheading1">{currentDest.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
