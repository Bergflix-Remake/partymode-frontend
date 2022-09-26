import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="flex flex-col min-h-screen bg-black text-clean-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
