import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const types = {
  link: "ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border",
  linkout:
    "inline ease-in-out cursor-pointer h-min group border-b-primary-500 hover:border-b-2 transition-border",
};

function Link({ children, type, ...props }) {
  const checkType = Object.keys(types).includes(type) ? type : "link";

  return (
    <a className={`${types[checkType]}`} {...props}>
      {children}
      {checkType === "linkout" && (
        <ExternalLinkIcon class="inline w-5 h-5 mb-1 ml-0.5 transition-colors group-hover:text-primary-500" />
      )}
    </a>
  );
}

export default Link;
