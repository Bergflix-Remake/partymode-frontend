import React from "react";

function Logo({ long, size, children }) {
  return (
    <h1 className={`font-bold text-white ${size}`}>
      {long ? "Bergflix" : "Bf"}
      <span className="text-primary-500">. {children}</span>
    </h1>
  );
}

export default Logo;
