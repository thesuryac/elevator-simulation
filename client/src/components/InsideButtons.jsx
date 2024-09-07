const InsideButtons = ({ floors, handleFloorClick }) => {
  return (
    <div className="flex flex-wrap flex-row h-2/3 min-w-60  max-w-80 lg:w-2/5 xlg:max-w-full  gap-1 justify-around">
      {floors.map((floor, index) => {
        return (
          <button
            className={`w-1/4 h-2/12 rounded-2xl ${
              floor ? "border-green-500" : "border-zinc-500"
            } bg-indigo-100 border-4 `}
            onClick={() => {
              handleFloorClick(index);
            }}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default InsideButtons;
