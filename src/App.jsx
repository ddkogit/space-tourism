import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
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
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
