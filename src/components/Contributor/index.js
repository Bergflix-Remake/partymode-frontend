import React from "react";

function Contributor({ image, name, role, character, url }) {
  const openArtist = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      onClick={openArtist}
      class="cursor-pointer bg-clean-dark-800 flex flex-row flex-shrink-0 rounded-lg m-2 shadow-lg h-24 min-w-52 overflow-hidden hover:-translate-y-1 hover:shadow-primary-500/5 hover:shadow-xl transition-all"
    >
      <img src={image} alt={name} class="h-full z-0"></img>
      <div class="flex flex-col w-full h-full justify-center items-center p-2">
        <h3>{name}</h3>
        <h4 class="text-gray-500 text-center">
          {role}
          {character ? <span class="font-bold">· {character}</span> : null}
        </h4>
      </div>
    </div>
  );
}

export default Contributor;
