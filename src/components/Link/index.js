import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function Link({ children, type, to, ...props }) {
  return (
    <a
      className={
        "font-bold text-white ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border group w-max"
      }
      href={to}
      {...props}
    >
      {type === "linkout" && (
        <ExternalLinkIcon class="inline w-6 h-6 mb-1 mr-1 group-hover:text-primary-500" />
      )}
      {children}
    </a>
  );
}

export default Link;
