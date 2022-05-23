import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [newImg, setnewImg] = useState(img);

  const changeImage = () => {
    if (newImg === img) {
      return setnewImg(imgClicked);
    } else {
      return setnewImg(img);
    }
  };

  return (
    <div>
      <img onClick={changeImage} src={newImg} alt="Pepe" />
    </div>
  );
};

export default ClickablePicture;
