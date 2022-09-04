import React from "react";
import { twMerge } from "tailwind-merge";

function TextField({ type, className, placeholder, ...props }) {
  return (
    <input
      className={twMerge(
        "h-min p-2 border-2 border-primary-500 rounded bg-transparent outline-none",
        className
      )}
      type={type}
      placeholder={placeholder}
      {...props}
    ></input>
  );
}

export default TextField;
