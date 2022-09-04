import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/Input/TextField";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-primary-500">Lust auf Party?</h1>
      <p className="text-2xl mb-5">Du bist aktuell in keiner Party</p>
      <Button type={"outline"} className={"w-80 mb-2"}>
        Party erstellen
      </Button>
      <div className="w-80">
        <TextField
          placeholder={"Party ID"}
          className={"w-3/4 rounded-r-none"}
        />
        <Button type={"primary"} className={"w-1/4 h-full rounded-l-none"}>
          Beitreten
        </Button>
      </div>
    </div>
  );
}

export default Home;
