const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <img src={img} alt={img} style={{ width: 100, height: 100 }}></img>
      <div>
        <p>{name}</p>
        <p>{rating}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
