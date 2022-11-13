import React from "react";
import AudienceEntry from "./AudienceEntry/AudienceEntry";

function Audience() {
  return (
    <div className={"h-5/6 grid grid-cols-3 auto-rows-min"}>
      <AudienceEntry
        name={"lyxt"}
        thumbnail={
          "https://cdn.discordapp.com/avatars/744995814275022869/406f01e048ede87d5660bf5f60647546.webp?size=128"
        }
      />
      <AudienceEntry
        name={"Anniken"}
        thumbnail={
          "https://cdn.discordapp.com/avatars/358663298779971584/015c173d1d0c862993e40a8aa0ba69e8.webp?size=128"
        }
      />
      <AudienceEntry
        name={"Mondmarmelade"}
        thumbnail={
          "https://cdn.discordapp.com/avatars/744995814275022869/406f01e048ede87d5660bf5f60647546.webp?size=128"
        }
      />
    </div>
  );
}

export default Audience;
