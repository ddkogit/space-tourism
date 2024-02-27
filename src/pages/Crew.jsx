import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Crew({ crew,setBg,background }) {
  const [currentCrew, setCurrentCrew] = useState(crew[0]);
  const handleClick = (crew) => {
    setCurrentCrew(crew);
  };

  useEffect(()=>{
    setBg (background)
  },[]);
  return (
    <div>
      {crew.map((item) => (
        <NavLink onClick={() => handleClick(item)} to="/crew" activeClassName="activelink" className="crewlink">
          0
        </NavLink>
      ))}
      <div>{currentCrew.name}</div>
      <img src={currentCrew.images.png} alt={currentCrew.name} />
    </div>
  );
}

export default Crew;
