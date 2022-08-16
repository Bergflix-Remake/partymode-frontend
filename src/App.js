import * as React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="flex flex-col min-h-screen bg-black text-clean-white">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
