//import { useState } from 'react';

const ClickablePicture = ({ img }) => {
  //const [newImg, setnewImg] = useState(img);
  //const changeImg = () => {
  //  if (newImg === img) {
  //    setnewImg(imgClicked);
  //  } else {
  //    setnewImg(img);
  //  }
  //};

  return <img src={img} alt="Alt"></img>;
};

export default ClickablePicture;
