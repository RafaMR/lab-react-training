const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <p>{name}</p>
      <p>{rating}</p>
      <img src={img} alt={img} style={{ width: 100, height: 100 }}></img>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
