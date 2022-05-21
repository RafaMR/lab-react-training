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
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: 300,
        height: 200,
      }}
    >
      <p>{type}</p>
      <p>···· ···· ···· {lastNumbers} </p>
      <p>
        Expires: {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
