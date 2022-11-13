import React from "react";

function AudienceEntry({ name, thumbnail }) {
  return (
    <div
      className={
        "bg-clean-dark-800 h-16 w-max p-2 rounded-md shadow-lg border border-primary-500"
      }
    >
      <div className={"flex flex-row items-center"}>
        <img
          src={thumbnail}
          className={"w-10 h-auto rounded-full mr-2"}
          alt={name}
        />
        <h3 className={"font-semibold"}>{name}</h3>
      </div>
      {/* <p className={""}>Beigetren: 15.10.2022</p> */}
    </div>
  );
}

export default AudienceEntry;
