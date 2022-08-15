import React from "react";
import NavbarLink from "../NavbarLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-b-[1px] border-clean-dark-500 fixed top-0 z-50 flex-row items-center hidden w-screen h-20 p-2 space-x-5 text-gray-500 sm:flex bg-darkest-dark bg-opacity-20 backdrop-blur-sm">
      <div className="ml-2"></div>
      <Link className="md:hidden" to="/">
        <h1 className="text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white ">
          Bf
          <span className="font-bold text-primary-500">.</span>
        </h1>
      </Link>
      <Link className="hidden md:block" to="/">
        <h1 className="text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white ">
          Bergflix
          <span className="font-bold text-primary-500">.</span>
        </h1>
      </Link>
      <div className="h-5 mr-5 border-r-2 border-gray-600"></div>
      <ul className="flex flex-row space-x-10">
        <NavbarLink className="hover:text-primary-500" to="/movies">
          Home
        </NavbarLink>
        <NavbarLink className="hover:text-primary-500" to="/series">
          Filme
        </NavbarLink>
        <NavbarLink className="hover:text-primary-500" to="/series">
          Serien
        </NavbarLink>
        <NavbarLink className="hover:text-primary-500" to="/series">
          Party
        </NavbarLink>
      </ul>
      <div className="flex-1 flex-row h-full">
        {/* User Popup */}
        <div class="flex flex-col items-end ml-auto mr-8">
          <img
            src="https://cdn.bergflix.de/logo/light_bg.png"
            alt="Profile"
            class="rounded-full shadow w-14 h-14 backdrop-blur-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
