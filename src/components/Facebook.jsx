import { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  const [profileValue, setProfileValue] = useState(profiles);

  const changeBackgroudColor = () => {
    const profileValueCopy = [...profileValue];
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (profileValueCopy.country === 'England') {
      profileValueCopy.backgroundColor = randomColor;
    } else if (profileValueCopy.country === 'EEUU') {
      profileValueCopy.backgroundColor = randomColor;
    } else if (profileValueCopy.country === 'Malaysia') {
      profileValueCopy.backgroundColor = randomColor;
    } else if (profileValueCopy.country === 'Germany') {
      profileValueCopy.backgroundColor = randomColor;
    } else {
      profileValueCopy.backgroundColor = randomColor;
    }
    setProfileValue(profileValueCopy);
  };

  return (
    <div>
      <button onClick={changeBackgroudColor} style={{ marginRight: 50 }}>
        All
      </button>
      <button onClick={changeBackgroudColor} style={{ marginRight: 50 }}>
        England
      </button>
      <button onClick={changeBackgroudColor} style={{ marginRight: 50 }}>
        EEUU
      </button>
      <button onClick={changeBackgroudColor} style={{ marginRight: 50 }}>
        Malaysia
      </button>
      <button onClick={changeBackgroudColor} style={{ marginRight: 50 }}>
        Germany
      </button>
      {profileValue.map((profile) => {
        return (
          <div
            className="Facebook_Profile"
            style={{ background: { changeBackgroudColor } }}
          >
            <div className="Facebook_Img">
              <img src={profile.img} alt={profile.name} />
            </div>
            <div>
              <p>
                <strong>First Name: </strong> {profile.firstName}
              </p>
              <p>
                <strong>Last Name: </strong> {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong> {profile.country}
              </p>
              <p>
                <strong>Type: </strong>
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Facebook;
