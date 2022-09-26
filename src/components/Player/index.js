import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

function Player() {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src: "https://www.youtube.com/watch?v=jcrLgMpLFvc&ab_channel=HerrBergmann",
            provider: "youtube",
          },
        ],
      }}
    />
  );
}

export default Player;
