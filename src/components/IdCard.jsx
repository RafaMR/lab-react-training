const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <img src={picture} alt={picture} style={{ width: 200, height: 200 }} />
      <h3>First Name: {firstName}</h3>
      <h3>Last Name:{lastName}</h3>

      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toString()}</p>
    </div>
  );
};

export default IdCard;
