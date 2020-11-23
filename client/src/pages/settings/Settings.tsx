import React from 'react';
import Nav from '../../components/Nav';
import ProvilePic from './img/profile-pic.jpg';

function Settings() {

  const [popupDisplay, setpopupDisplay] = React.useState<'none' | 'block'>('none');
  const [iWantToChange, setiWantToChange] = React.useState<'username' | 'email' | 'newpassword'>('username');


  const handleClick = (e) => {
    setiWantToChange(e.target.id);
    setpopupDisplay(e.target.className === 'change' ? 'block' : 'none');
  }

  return (
    <>
      <Nav />
      <main style={{ display: popupDisplay === "block" ? "none" : "block" }}>
        <img src={ProvilePic} alt="Here should be a provile pic that failed to load" className="profile-pic" />
        <div className="setting">
          <h3>Username:</h3>
          <div className="pab">
            <p>anonica</p>
            <button className="change" onClick={handleClick} id="username">change</button>
          </div>
          <hr />
        </div>
        <div className="setting">
          <h3>Email:</h3>
          <div className="pab">
            <p>krówka.patrycja@op.pl</p>
            <button className="change" onClick={handleClick} id="email">change</button>
          </div>
          <hr />
        </div>
        <div className="setting">
          <h3>Password:</h3>
          <div className="pab">
            <p>******</p>
            <button className="change" onClick={handleClick} id="newpassword">change</button>
          </div>
          <hr />
        </div>
      </main>
      <form action="" id="popup" style={{ display: popupDisplay }}>
        <div className="close" onClick={handleClick}>X</div>
        <label htmlFor={iWantToChange}>
          {`${iWantToChange}:`}
        </label>
        <input
          type="text"
          name={iWantToChange}
        />
        <label htmlFor="">
          {`repeat ${iWantToChange}:`}
        </label>
        <input
          type="text"
          name={`${iWantToChange} repeat`}
        />
        <label htmlFor="password">
          password:
            </label>
        <input
          type="text"
          name="password"
        />
        <button>send</button>
      </form>
    </>
  );
}

export default Settings;