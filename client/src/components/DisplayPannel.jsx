const DisplayPannel = ({ currentFloor, direction, load }) => {
  return (
    <div className="h-1/3 p-3 w-full flex justify-around items-center bg-indigo-800">
      <div className="text-2xl h-5/6 w-1/5 flex flex-col justify-center items-center bg-indigo-400 p-8 rounded-md">
        <span>direction</span>
        <span>{direction}</span>
      </div>
      <div className=" font-bold text-5xl h-5/6 w-2/5 flex flex-col justify-center items-center bg-indigo-400 p-8 rounded-md">
        <span>floor</span>
        <span>{currentFloor}</span>
      </div>
      <div className="text-4xl flex flex-col h-5/6 w-1/5 justify-center items-center bg-indigo-400 p-8 rounded-md">
        <span>load</span>
        <span>{load}</span>
      </div>
    </div>
  );
};

export default DisplayPannel;
