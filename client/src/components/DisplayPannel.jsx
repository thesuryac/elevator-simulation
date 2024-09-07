import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
const DisplayPannel = ({ currentFloor, direction, load }) => {
  return (
    <div className="h-1/3 p-3 w-full flex justify-around items-center bg-indigo-400 rounded-tr-2xl rounded-tl-2xl">
      <div className="text-2xl h-5/6 w-1/5 flex flex-col justify-around items-center bg-indigo-700 p-8 rounded-md text-gray-200">
        <span>DIRECTION</span>
        <hr className="w-11/12" />
        <span>
          {direction === "up" ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
        </span>
      </div>
      <div className=" font-bold text-5xl h-5/6 w-2/5 flex flex-col justify-around items-center bg-indigo-700 p-8 rounded-md text-gray-200 gap-1">
        <span>FLOOR</span>
        <hr className="w-11/12" />
        <span>{currentFloor}</span>
      </div>
      <div className="text-4xl flex flex-col h-5/6 w-1/5 justify-around items-center bg-indigo-700 p-8 rounded-md text-gray-200 gap-1">
        <span>LOAD</span>
        <hr className="w-11/12" />
        <span>{load}</span>
      </div>
    </div>
  );
};

export default DisplayPannel;
