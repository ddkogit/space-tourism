import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Technology({ technology,setBg,background }) {

  const [currentTech,setCurrentTech]= useState(technology[0]);
  const handleClick =(tech)=>{
    setCurrentTech(tech);
  }

  useEffect(()=>{
    setBg (background)
  },[]);

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
