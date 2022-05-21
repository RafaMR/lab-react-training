const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div>
      <h3>{lastName}</h3>
      <h3>{firstName}</h3>
      <p>{gender}</p>
      <p>{height}</p>
      <p>{birth.toString()}</p>
      <img src={picture} alt={picture} />
    </div>
  );
};

export default IdCard;
