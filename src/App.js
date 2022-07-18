import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="flex flex-col min-h-screen text-gray-900 bg-gray-200 dark:bg-clean-dark dark:text-clean-white"></div>
    </div>
  );
}

export default App;
