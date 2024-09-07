const InsideButtons = ({ floors }) => {
  return (
    <div className="flex flex-wrap flex-row max-w-44 gap-1 justify-around">
      {floors.map((floor, index) => {
        return (
          <button
            className={`w-14 h-14 rounded-2xl ${
              floor ? "border-green-500" : "border-zinc-500"
            } bg-indigo-100 border-4 `}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default InsideButtons;
