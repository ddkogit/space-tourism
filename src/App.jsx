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

  const [url,setUrl] = useState("");
  const setBg=(bg)=>{

    setUrl(bg)

  }

  return (
    <>
    <div style={{
      background:`url(${url})`,
      height:"100vh"
    }}>

      <BrowserRouter>
        <div className="navPlace">
          <Navbar data={data} />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home 
              background={data.backgrounds.home}
            setBg={setBg} />}
            />
          <Route
            path="/destinations"
            element={
              <Destinations
              destinations={data.destinations}
              background={data.backgrounds.destination}
              setBg={setBg}
              />
            }
            />
          <Route
            path="/crew"
            element={<Crew crew={data.crew} 
            background={data.backgrounds.crew}
            setBg={setBg} />}
            />
          <Route
            path="/technology"
            element={
              <Technology
              technology={data.technology}
              background={data.backgrounds.technology}
              setBg={setBg}
              />
            }
            />
        </Routes>
      </BrowserRouter>
            </div>
    </>
  );
}

export default App;
