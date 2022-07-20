import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const types = ["link", "linkout"];

function Button({ children, type, to }) {
  const checkType = types.includes(type) ? type : types[0];

  if (checkType === "link") {
    return (
      <a
        className="ease-in-out cursor-pointer h-min border-b-primary hover:border-b-2 transition-border"
        href={to}
      >
        {children}
      </a>
    );
  } else if (checkType === "linkout") {
    return (
      <a
        className="inline ease-in-out cursor-pointer h-min group border-b-primary hover:border-b-2 transition-border"
        href={to}
      >
        {children}
        <ExternalLinkIcon class="inline w-5 h-5 mb-1 ml-0.5 transition-colors group-hover:text-primary" />
      </a>
    );
  }
}

export default Button;
