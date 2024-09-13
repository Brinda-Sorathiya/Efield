import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crop_rec from "./pages/crop_rec.jsx";
import Home from "./pages/home.jsx";
import Yield from "./pages/yield.jsx";
import Rainfall from "./pages/rainfall.jsx";
import Production from "./pages/production.jsx";

function App() {
  return (
    <>
      <Router>
        <div className=" bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-[length:200%_200%] animate-gradient-move min-h-screen h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop" element={<Crop_rec/>} />
            <Route path="/yield" element={<Yield/>} />
            <Route path="/rainfall" element={<Rainfall/>} />
            <Route path="/production" element={<Production/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
