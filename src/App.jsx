import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Crew from "./pages/Crew";
import Destinations from "./pages/Destinations";
import Technology from "./pages/Technology";

import { useData } from "./context/data";
function App() {
  const data = useData();

  return (
    <>
      <BrowserRouter>
        <Navbar data={data} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations  destinations={data.destinations}/>} />
          <Route path="/crew" element={<Crew  crews={data.crew}/>} />
          <Route path="/technology" element={<Technology technology={data.technology} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
