import React from "react";
import PlaylistEntry from "./PlaylistEntry/PlaylistEntry";

function Playlist() {
  return (
    <div className={"h-5/6"}>
      {/* <div className={"h-full overflow-scroll"}></div> */}

      <div className="flex flex-col space-y-2">
        <PlaylistEntry
          id={2}
          key={2}
          episode={1}
          thumbnail={
            "https://api.bergflix.de/uploads/BERGRUNNER_Jaeger_der_verlorenen_Handys_2_Minecraft_Kurzfilm_pifkm4_Sto_BA_0904546857.webp"
          }
          title={"Bergrunner"}
          playing={false}
        />
        <PlaylistEntry
          id={2}
          key={2}
          episode={2}
          thumbnail={
            "https://api.bergflix.de/uploads/BERGRUNNER_Jaeger_der_verlorenen_Handys_2_Minecraft_Kurzfilm_pifkm4_Sto_BA_0904546857.webp"
          }
          title={"Bergrunner"}
          playing={true}
        />
        <PlaylistEntry
          id={2}
          key={2}
          episode={3}
          thumbnail={
            "https://api.bergflix.de/uploads/BERGRUNNER_Jaeger_der_verlorenen_Handys_2_Minecraft_Kurzfilm_pifkm4_Sto_BA_0904546857.webp"
          }
          title={"Bergrunner"}
          playing={false}
        />
      </div>
    </div>
  );
}

export default Playlist;
