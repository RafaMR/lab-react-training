import { useState } from 'react';

const LikeButton = () => {
  const [count, setLikeValue] = useState(0);

  const handleClick = () => {
    setLikeValue(count + 1);
  };

  return (
    <div className="LikeButton">
      <p> {count} </p>
      <button onClick={handleClick}>Like</button>
    </div>
  );
};
export default LikeButton;
