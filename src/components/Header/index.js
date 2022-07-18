import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-b-[1px] border-clean-dark fixed top-0 z-50 flex-row items-center hidden w-screen h-20 p-2 space-x-5 text-gray-500 sm:flex bg-darkest-dark bg-opacity-20 backdrop-blur-sm">
      <div className="ml-2"></div>
      <Link className="link" to="/">
        <h1 className="text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white md:hidden">
          Bf
          <span className="font-bold text-primary">.</span>
        </h1>
      </Link>
      <Link className="link" to="/">
        <h1 className="hidden text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white md:block">
          Bergflix
          <span className="font-bold text-primary">.</span>
        </h1>
      </Link>
      <div className="h-5 mr-5 border-r-2 border-gray-600"></div>
      <ul className="flex flex-row space-x-10">
        <Link className="hover:text-primary" to="/movies">
          Home
        </Link>
        <Link className="hover:text-primary" to="/series">
          Movies
        </Link>
        <Link className="hover:text-primary" to="/series">
          Series
        </Link>
        <Link className="hover:text-primary" to="/series">
          Party
        </Link>
      </ul>
      <div className="flex flex-row h-full ml-auto mr-8">
        {/* User Popup */}
      </div>
    </div>
  );
}

export default Header;
