const NumbersTable = ({ limit }) => {
  let arrayLimit = [];

  for (let i = 1; i <= limit; i++) {
    arrayLimit.push(i);
  }

  return (
    <div className="NumbersTable">
      {arrayLimit.map((element) => {
        if (element % 2 === 0) {
          return <div style={{ background: 'red' }}>{element}</div>;
        } else {
          return <div>{element}</div>;
        }
      })}
    </div>
  );
};

export default NumbersTable;
