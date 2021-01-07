import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../actions/mainContext';
import Nav from '../../components/Nav';
import { PopupRepeat } from '../../components/Popup';
import ProvilePic from './img/profile-pic.jpg';

function Settings(): JSX.Element {
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.jwtToken) history.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [display, setDisplay] = useState<'none' | 'block'>('none');
  const [displayName, setDisplayName] = useState<string>('');
  const [hBodyName, setHBodyName] = useState<string>('');

  const handleClick = (e) => {
    setDisplay('block');
    switch (e.target.id) {
      case 'username':
        setDisplayName('username');
        setHBodyName('username');
        break;
      case 'email':
        setDisplayName('email');
        setHBodyName('email');
        break;
      case 'newpassword':
        setDisplayName('new password');
        setHBodyName('newPassword');
        break;
    }
  }

  return (
    <>
      <Nav />
      <main>
        <img src={ProvilePic} alt="Here should be a provile pic that failed to load" className="profile-pic" />
        <div className="setting">
          <h3>Username:</h3>
          <div className="pab">
            <p>{user.userName}</p>
            <button className="change" id="username" onClick={handleClick}>change</button>
          </div>
          <hr />
        </div>
        <div className="setting">
          <h3>Email:</h3>
          <div className="pab">
            <p>{user.email}</p>
            <button className="change" id="email" onClick={handleClick}>change</button>
          </div>
          <hr />
        </div>
        <div className="setting">
          <h3>Password:</h3>
          <div className="pab">
            <p>********</p>
            <button className="change" id="newpassword" onClick={handleClick}>change</button>
          </div>
          <hr />
        </div>
      </main>
      <PopupRepeat displayName={displayName} hBodyName={hBodyName} display={display} setDisplay={setDisplay} />
    </>
  );
}

export default Settings;