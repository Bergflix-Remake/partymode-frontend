import React from "react";

function TextField({ type, _style, placeholder, ...props }) {
  return (
    <input
      className={`h-min p-2 border-2 border-primary-500 rounded bg-transparent outline-none ${_style}`}
      type={type}
      placeholder={placeholder}
      {...props}
    ></input>
  );
}

export default TextField;
