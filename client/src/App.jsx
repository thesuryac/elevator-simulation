import React, { useState } from "react";
import DisplayPannel from "./components/DisplayPannel";
import OutsideButton from "./components/OutsideButton";
import InsideButtons from "./components/InsideButtons";
import { response } from "../data/sample";

const App = () => {
  const [out, setOut] = useState(true);
  const floors = [true, false, true, false];
  const currentFloor = 2;
  const direction = "up";
  const load = 4;
  return (
    <div className="h-screen w-screen bg-indigo-300 flex justify-center items-center">
      <div className="h-3/4 w-3/4 shadow-md bg-indigo-500">
        <DisplayPannel
          currentFloor={currentFloor}
          direction={direction}
          load={load}
        />
        <div>{out ? <OutsideButton /> : <InsideButtons floors={floors} />}</div>
      </div>
    </div>
  );
};

export default App;
