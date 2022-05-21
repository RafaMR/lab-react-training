const BoxColor = ({ r, g, b }) => {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: 300,
        height: 200,
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;
