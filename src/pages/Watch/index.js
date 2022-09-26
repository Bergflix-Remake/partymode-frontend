import React from "react";
import Player from "../../components/Player";
// import Title from "../../components/Text/Title";
import Subtitle from "../../components/Text/Subtitle";

function Home() {
  return (
    <div className="p-5 flex flex-col w-full min-h-screen space-y-2 mt-20">
      <div className="flex flex-col xl:flex-row xl:space-x-2">
        {/* Player */}
        <div className="bg-clean-dark-600 w-full aspect-video md:rounded-l-lg  overflow-hidden">
          <Player />
        </div>
      </div>

      {/* Info */}
      <div className="w-full p-10 bg-clean-dark-600 rounded-lg flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <img
            className="max-h-24"
            alt=""
            src={`https://cdn.bergflix.de/video_icons/captain_pineapple.png`}
          />
          {/* <Title>Lorem Ipsum</Title> */}
          <p className="text-gray-500 font-light">Lorem Ipsum</p>
        </div>
        <div className="md:ml-auto mt-5">
          {/* <InfoRow :year='2022' :age='16' genre='Action' /> */}
        </div>
      </div>
      <div className="w-full p-10 bg-clean-dark-600 rounded-lg flex flex-col">
        <Subtitle>Mitwirkende</Subtitle>
        <div className="flex flex-wrap">
          {/* <Contributor
          v-for='contributor in movie.data?.attributes?.contributors' :key='contributor?.id'
          :name='contributor?.contributor?.data?.attributes?.name!' :role='contributor?.role!'
          :character='contributor?.character'
          :image='`https://api.bergflix.de${contributor?.contributor?.data?.attributes?.image?.data?.attributes?.url}`'
          :url='contributor?.contributor?.data?.attributes?.href!' /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
