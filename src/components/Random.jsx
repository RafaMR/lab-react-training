const Random = ({ min, max }) => {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div className="Random">
      <p>
        Random number between {min} and {max} = {getRandom(min, max)}
      </p>
    </div>
  );
};

export default Random;
