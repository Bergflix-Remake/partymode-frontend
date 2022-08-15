import React from "react";
import { NavLink } from "react-router-dom";

function NavbarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-xl font-thin transition-all ease-in-out cursor-pointer h-min hover:text-primary-500 text-primary-500 group w-max"
          : "text-xl font-thin transition-all ease-in-out cursor-pointer h-min hover:text-primary-500 text-delorean-500 group w-max"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
