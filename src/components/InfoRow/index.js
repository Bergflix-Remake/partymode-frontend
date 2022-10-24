import React from "react";

function InfoRow({ year, age, genre }) {
  return (
    <div class="flex flex-wrap items-center space-x-3 text-lg font-light text-white md:flex-nowrap">
      <h2>{year}</h2>
      <h2 class="px-2 font-medium border-2 rounded-md text-primary-500">
        {age}+
      </h2>
      {/* Needs to be adjusted to backend */}
      {/* <h2>{episodes > 1 ? episodes + " Episoden" : "Film"}</h2> */}
      <span class="w-[1px] self-stretch bg-white"></span>
      <h2>{genre}</h2>
    </div>
  );
}

export default InfoRow;
