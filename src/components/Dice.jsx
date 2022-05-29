import { useState } from 'react';
import dice0 from '.././assets/images/dice-empty.png';
import dice1 from '.././assets/images/dice1.png';
import dice2 from '.././assets/images/dice2.png';
import dice3 from '.././assets/images/dice3.png';
import dice4 from '.././assets/images/dice4.png';
import dice5 from '.././assets/images/dice5.png';
import dice6 from '.././assets/images/dice6.png';

const Dice = () => {
  const randomNumberFromDice = Math.floor(Math.random() * 6) + 1;
  const [diceRandom, setdiceRandom] = useState(dice0);

  const handleRandomDiceImage = () => {
    setdiceRandom(dice0);
    setTimeout(() => {
      switch (randomNumberFromDice) {
        case 1:
          setdiceRandom(dice1);
          break;
        case 2:
          setdiceRandom(dice2);
          break;
        case 3:
          setdiceRandom(dice3);
          break;
        case 4:
          setdiceRandom(dice4);
          break;
        case 5:
          setdiceRandom(dice5);
          break;
        case 6:
          setdiceRandom(dice6);
          break;
        default:
          setdiceRandom(dice0);
          break;
      }
    }, 1000); // 1000 = 1 second
  };

  return (
    <div style={{ margin: 50 }}>
      <img
        src={diceRandom}
        alt="dice"
        onClick={handleRandomDiceImage}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default Dice;
