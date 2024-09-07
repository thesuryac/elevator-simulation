import React, { useState } from "react";
import DisplayPannel from "./components/DisplayPannel";
import OutsideButton from "./components/OutsideButton";
import InsideButtons from "./components/InsideButtons";
import { response } from "../data/sample";

const App = () => {
  const [out, setOut] = useState(false);
  const floors = [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ];
  const currentFloor = 2;
  const direction = "up";
  const load = 4;
  return (
<<<<<<< HEAD
    <div className="h-screen w-screen relative bg-indigo-300 flex justify-center items-center">
      <div className="h-3/4 w-3/4 shadow-md bg-indigo-500">
=======
    <div className="h-screen w-screen bg-indigo-300 flex justify-center items-center">
      <div className="h-3/4 w-3/4 shadow-lg bg-indigo-500 rounded-2xl">
>>>>>>> c556464 (finished display)
        <DisplayPannel
          currentFloor={currentFloor}
          direction={direction}
          load={load}
        />
        <div className="w-full h-2/3 flex justify-center items-center">
          {out ? <OutsideButton /> : <InsideButtons floors={floors} />}
        </div>
      </div>
    </div>
  );
};

export default App;
