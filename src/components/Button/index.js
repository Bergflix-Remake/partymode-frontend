import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const types = ["link", "linkout", "primary", "secondary", "ghost", "outline"];

function Button({ children, type, to }) {
  const checkType = types.includes(type) ? type : types[0];

  // Must be rewritten cleaner
  if (checkType === "link") {
    return (
      <a
        className="ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border"
        href={to}
      >
        {children}
      </a>
    );
  } else if (checkType === "linkout") {
    return (
      <a
        className="inline ease-in-out cursor-pointer h-min group border-b-primary-500 hover:border-b-2 transition-border"
        href={to}
      >
        {children}
        <ExternalLinkIcon class="inline w-5 h-5 mb-1 ml-0.5 transition-colors group-hover:text-primary-500" />
      </a>
    );
  } else if (checkType === "primary") {
    return (
      <button
        className="inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-white bg-primary-500 hover:bg-primary-400 shadow-md hover:shadow-lg p-2"
        href={to}
      >
        {children}
      </button>
    );
  } else if (checkType === "secondary") {
    return (
      <button
        className="inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-white bg-clean-dark-500 hover:bg-clean-dark-400 shadow-md hover:shadow-lg p-2"
        href={to}
      >
        {children}
      </button>
    );
  } else if (checkType === "ghost") {
    return (
      <button
        className="inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-primary-500 hover:text-primary-400"
        href={to}
      >
        {children}
      </button>
    );
  } else if (checkType === "outline") {
    return (
      <button
        className="inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-white border-primary-500 hover:border-primary-400 hover:bg-primary-400 border-2 p-2"
        href={to}
      >
        {children}
      </button>
    );
  }
}

export default Button;
