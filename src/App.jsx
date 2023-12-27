import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home/Home";
import Navbar from './pages/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Technology from './pages/Technology/Technology';

function App() {
  

  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  </Router>
  )
}



export default App
