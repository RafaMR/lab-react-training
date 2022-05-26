import { useState } from 'react';

const LikeButton = () => {
  const arrColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [count, setLikeValue] = useState(0);

  const handleClick = () => {
    setLikeValue(count + 1);
  };

  return (
    <div className="LikeButton">
      <button
        style={{ backgroundColor: arrColors[count] }}
        onClick={handleClick}
      >
        <strong>{count} Likes</strong>
      </button>
    </div>
  );
};
export default LikeButton;
