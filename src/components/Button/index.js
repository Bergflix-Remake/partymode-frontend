import React from "react";
import { twMerge } from "tailwind-merge";

const types = {
  primary:
    "inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-white bg-primary-500 hover:bg-primary-400 shadow-md hover:shadow-lg p-2",
  secondary:
    "inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-white bg-clean-dark-500 hover:bg-clean-dalk-400 shadow-md hover:shadow-lg p-2",
  ghost:
    "inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-primary-500 hover:text-primary-400",
  outline:
    "inline ease-in-out cursor-pointer h-min group transform transition-all rounded w-max text-white border-primary-500 hover:border-primary-400 hover:bg-primary-400 border-2 p-2",
  watchpage:
    "inline ease-in-out cursor-pointer h-min group transform transition-all rounded-md w-max text-white bg-clean-dark-800 p-3",
};

function Button({ children, type, className, ...props }) {
  const checkType = Object.keys(types).includes(type) ? type : "primary";

  return (
    <button className={twMerge(types[checkType], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
