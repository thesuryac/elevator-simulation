const InsideButtons = ({ floors }) => {
  return (
    <div>
      {floors.map((floor, index) => {
        return <button>{index}</button>;
      })}
    </div>
  );
};

export default InsideButtons;
