import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          magni provident animi ex nihil mollitia soluta nobis ullam officia eos,
          assumenda expedita tenetur facere quas id consequuntur et porro ipsum
          est deleniti necessitatibus! Aut laboriosam iste optio placeat, sint,
          dolore quia, aliquid esse modi enim eum? Tempora, dignissimos quaerat!
          Earum.
        </p>
      </div>

      <div className="right">
      <div className="circle"></div>
        <p className="text">
          EXPLORE
        </p>
      </div>
    </div>
  );
}
