import React from "react";
import { twMerge } from "tailwind-merge";

function Title({ children, className }) {
  return (
    <h1
      className={twMerge(
        "text-4xl font-black text-white my-5 text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default Title;
