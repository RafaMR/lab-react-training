const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <div className="Img">
        <img src={picture} alt={picture} />
      </div>
      <div>
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name:</strong>
          {lastName}
        </p>

        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
