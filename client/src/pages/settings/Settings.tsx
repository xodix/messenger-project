import React from 'react';
import './style/settings.scss';
import Nav from '../../components/Nav';
import ProvilePic from './style/img/profile-pic.jpg';

interface state {
  popupDisplay: string,
  iWantToChange: string
}

class Chats extends React.Component {
  state: state
  constructor(props) {
    super(props);
    this.state = {
      popupDisplay: 'none',
      iWantToChange: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      iWantToChange: e.target.id,
      popupDisplay: e.target.className === 'change' ? 'block' : 'none'
    });
  }
  render() {
    return (
      <>
        <Nav />
        <main style={{ display: this.state.popupDisplay === "block" ? "none" : "block" }}>
          <img src={ProvilePic} alt="Here should be a provile pic that failed to load" className="profile-pic" />
          <div className="setting">
            <h3>Username:</h3>
            <div className="pab">
              <p>anonica</p>
              <button className="change" onClick={this.handleClick} id="username">change</button>
            </div>
            <hr />
          </div>
          <div className="setting">
            <h3>Email:</h3>
            <div className="pab">
              <p>krówka.patrycja@op.pl</p>
              <button className="change" onClick={this.handleClick} id="email">change</button>
            </div>
            <hr />
          </div>
          <div className="setting">
            <h3>Password:</h3>
            <div className="pab">
              <p>******</p>
              <button className="change" onClick={this.handleClick} id="newpassword">change</button>
            </div>
            <hr />
          </div>
        </main>
        <form action="" id="popup" style={{ display: this.state.popupDisplay }}>
          <div className="close" onClick={this.handleClick}>X</div>
          <label htmlFor={this.state.iWantToChange}>
            {`${this.state.iWantToChange}:`}
          </label>
          <input
            type="text"
            name={this.state.iWantToChange}
          />
          <label htmlFor="">
            {`repeat ${this.state.iWantToChange}:`}
          </label>
          <input
            type="text"
            name={`${this.state.iWantToChange} repeat`}
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
}

export default Chats;