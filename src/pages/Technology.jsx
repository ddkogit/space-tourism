import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Technology({ technology }) {

  const [currentTech,setCurrentTech]= useState(technology[0]);
  const handleClick =(tech)=>{
    setCurrentTech(tech);
  }


  return <div>
    <nav>
      {technology.map((tech,index)=>(
        <NavLink activeClassName="activelink" className="techlink" onClick={()=>handleClick(tech)}>
          {index+1}
        </NavLink>
      ))}
    </nav>
    <div>
      {currentTech.name}
    </div>
    <img src={currentTech.images.portrait} alt={currentTech.name} />
  </div>;
}

export default Technology;
