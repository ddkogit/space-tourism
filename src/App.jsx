import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Crew from "./pages/Crew";
import Destinations from "./pages/Destinations";
import Technology from "./pages/Technology";

import { useData } from "./context/data";
import { useState } from "react";
function App() {
  const data = useData();
  const [url,setUrl] = useState("../assets/home/background-home-desktop.jpg")

  const selectedBg =(bg)=>{
    setUrl(bg);
  }
  return (
    <>
    <div style={{
      background:`url(${url}))`,
      height:"100vh"
    }}>

   

      <BrowserRouter>
        <div className="navPlace">
          <Navbar data={data} />
        </div>
        <Routes>
          <Route path="/" element={<Home selectedBg={selectedBg} />} />
          <Route
            path="/destinations"
            element={
              <Destinations
              destinations={data.destinations}
              selectedBg={selectedBg}
              />
            }
            />
          <Route
            path="/crew"
            element={<Crew crew={data.crew} />}
            selectedBg={selectedBg}
            />
          <Route
            path="/technology"
            selectedBg={selectedBg}
            element={<Technology technology={data.technology} />}
            />
        </Routes>
      </BrowserRouter>
            </div>
           
    </>
  );
}

export default App;
