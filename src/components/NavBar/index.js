import React from "react";
import Logo from "../Logo";
import NavbarLink from "../NavbarLink";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="flex flex-row items-center w-full h-24 px-8 text-white bg-gradient-to-b from-clean-dark-500 to-transparent backdrop-blur-md border-b-darkest-dark">
        <div
          id="main-nav"
          className="flex flex-row items-center mr-auto space-x-5"
        >
          <Logo size="text-3xl" long="true"></Logo>
          <NavbarLink to="/home">Home</NavbarLink>
          <NavbarLink to="/movies">Filme</NavbarLink>
          <NavbarLink to="/series">Serien</NavbarLink>
        </div>
        <div className="relative min-w-fit min-h-fit">
          {/* Avatar  */}
          <div className="rounded-full bg-cover bg-center cursor-pointer shadow-md hover:shadow-lg">
            <img
              src="https://cdn.bergflix.de/logo/light_bg.png"
              alt="Profile"
              className="rounded-full shadow w-14 h-14 backdrop-blur-3xl"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
