const Rating = ({ children }) => {
  let roundedNumber = Math.round(children);
  let rating = 0;

  if (roundedNumber === 0) {
    rating = '☆☆☆☆☆';
  } else if (roundedNumber === 1) {
    rating = '★☆☆☆☆';
  } else if (roundedNumber === 2) {
    rating = '★★☆☆☆';
  } else if (roundedNumber === 3) {
    rating = '★★★☆☆';
  } else if (roundedNumber === 4) {
    rating = '★★★★☆';
  } else {
    rating = '★★★★★';
  }

  return (
    <div>
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
