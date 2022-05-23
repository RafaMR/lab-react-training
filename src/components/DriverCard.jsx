const DriverCard = ({ name, rating, img, car }) => {
  let roundedNumber = Math.round(rating);
  let score = 0;

  if (roundedNumber === 0) {
    score = '☆☆☆☆☆';
  } else if (roundedNumber === 1) {
    score = '★☆☆☆☆';
  } else if (roundedNumber === 2) {
    score = '★★☆☆☆';
  } else if (roundedNumber === 3) {
    score = '★★★☆☆';
  } else if (roundedNumber === 4) {
    score = '★★★★☆';
  } else {
    score = '★★★★★';
  }
  return (
    <div className="DriverCard">
      <img src={img} alt={img} style={{ width: 100, height: 100 }}></img>
      <div>
        <p>{name}</p>
        <p>{score}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
