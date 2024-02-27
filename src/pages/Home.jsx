import React, { useEffect } from "react";
import "./Home.css"

function Home({background,setBg}) {

  useEffect(()=>{
    setBg (background)
  },[])

  return (
    <div >
      <div className="left">

      <div>SO, YOU WANT TO TRAVEL TO</div>
      <div>SPACE</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        deleniti, asperiores odio tempore ducimus amet necessitatibus dolor
        error et qui fuga reiciendis mollitia assumenda tempora velit possimus
        eius cupiditate iste illum aliquid? Fugit, consectetur ut veritatis
        facere iusto tenetur odio quae officiis non aspernatur error velit
        similique recusandae placeat eaque.
      </div>
      </div>

      <div className="right">
        <button className="actionbtn">EXPLORE</button>
      </div>
    </div>
  );
}

export default Home;
