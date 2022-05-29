import { useState } from 'react';

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleNextImage = () => {
    if (activeImage === images.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  const handlePreviousImage = () => {
    if (activeImage === 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <img
        src={images[activeImage]}
        alt="carousel"
        style={{ width: 400 }}
        onClick={handleNextImage}
      />
      <div style={{ margin: 20 }}>
        <button
          onClick={handlePreviousImage}
          style={{ width: 150, height: 100, marginRight: 50 }}
        >
          Left
        </button>
        <button
          onClick={handleNextImage}
          style={{ width: 150, height: 100, marginRight: 50 }}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
