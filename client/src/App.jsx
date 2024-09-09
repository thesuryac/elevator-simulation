import React, { useState } from "react";
import DisplayPannel from "./components/DisplayPannel";
import OutsideButton from "./components/OutsideButton";
import InsideButtons from "./components/InsideButtons";
import { response } from "../data/sample";

const App = () => {
  const [out, setOut] = useState(false);
  const [floors, setFloors] = useState([
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
  ]);
  const currentFloor = 2;
  const direction = "up";
  const load = 4;

  const handleFloorClick = (index) => {
    setFloors((prevFloors) => {
      // Create a shallow copy of the array
      const modifiedResult = [...prevFloors];

      // Modify the specific index
      modifiedResult[index] = !prevFloors[index];

      // Return the updated array
      return modifiedResult;
    });
  };

  return (
    <div className="h-screen w-screen bg-indigo-300 flex justify-center items-center">
      <div className="h-3/4 w-3/4 shadow-lg bg-indigo-500 rounded-2xl">
        <DisplayPannel
          currentFloor={currentFloor}
          direction={direction}
          load={load}
        />
        <div className="w-full h-2/3 flex justify-center items-center">
          {out ? (
            <OutsideButton />
          ) : (
            <InsideButtons
              floors={floors}
              handleFloorClick={handleFloorClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
