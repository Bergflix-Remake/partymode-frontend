import React from "react";
import Player from "../../components/Player";
import Title from "../../components/Text/Title";
import Subtitle from "../../components/Text/Subtitle";
import Chat from "../../components/Chat/Chat";
import InfoRow from "../../components/InfoRow";
import Contributor from "../../components/Contributor";

function Home() {
  return (
    <div className="p-5 flex flex-col w-full min-h-screen space-y-2 mt-20">
      <div className="flex flex-col xl:flex-row xl:space-x-2">
        {/* Player */}
        <div className="bg-clean-dark-600 w-full aspect-video md:rounded-l-lg  overflow-hidden">
          <Player />
        </div>
        <div className="w-full xl:w-1/3 bg-clean-dark-600 xl:rounded-bl-none xl:rounded-r-lg rounded-b-lg p-5 flex flex-col">
          <Title>Chat</Title>
          <Chat />
        </div>
      </div>

      {/* Info */}
      <div className="w-full p-10 bg-clean-dark-600 rounded-lg flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          {/* If Image is available*/}
          <img
            className="max-h-24"
            alt=""
            src={`https://cdn.bergflix.de/video_icons/captain_pineapple.png`}
          />
          {/* Else display Title*/}
          {/* <Title>Diese verdammte Ananas!</Title> */}

          <p className="text-gray-500 font-light">Lorem Ipsum</p>
        </div>
        <div className="md:ml-auto mt-5">
          <InfoRow year={"2022"} age={"16"} genre={"Action"} />
        </div>
      </div>
      <div className="w-full p-10 bg-clean-dark-600 rounded-lg flex flex-col">
        <Subtitle>Mitwirkende</Subtitle>
        <div className="flex flex-wrap">
          <Contributor
            key="1"
            name="Kedos"
            role="Voice Actor"
            character="Kedos"
            image={`https://yt3.ggpht.com/iLj3okZb4G3sKLhgdhubv-Ci6Qyb5Ha-_mxQeripIELZuRePPc1Ou-Rd8FwNRF_XsN1m8LksQQ=s88-c-k-c0x00ffffff-no-rj`}
            url="https://www.youtube.com/channel/UCJylTAwdSFEOKEhnNOjk1Lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
