const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const lastNumbers = `${number}`.slice(-4);

  return (
    <div
      className="CreditCard"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      <p>{type}</p>
      <h2>···· ···· ···· {lastNumbers} </h2>
      <p>
        Expires: {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
