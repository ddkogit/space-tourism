import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Crew({ crew }) {
  const [currentCrew, setCurrentCrew] = useState(crew[0]);
  const handleClick = (crew) => {
    setCurrentCrew(crew);
  };

  return (
    <div>
      {crew.map((item) => (
        <NavLink onClick={() => handleClick(item)} to="/crew" activeClassName="activelink" className="crewlink">
          0
        </NavLink>
      ))}
      <div>{currentCrew.name}</div>
    </div>
  );
}

export default Crew;
