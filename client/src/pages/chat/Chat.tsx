import React from 'react';
import Nav from './../../components/Nav';


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="message-group">
            <div className="nick-name">user:</div>
            <div className="message">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum illum nemo aspernatur corporis, praesentium odio placeat, impedit ut officiis rerum aut ipsa nisi culpa eum soluta nesciunt id. Quos, dolore!
            </div>
          </div>
          <div className="message-group me">
            <div className="nick-name">user:</div>
            <div className="message">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum illum nemo aspernatur corporis, praesentium odio placeat, impedit ut officiis rerum aut ipsa nisi culpa eum soluta nesciunt id. Quos, dolore!
            </div>
          </div>
          <div className="message-group">
            <div className="nick-name">user:</div>
            <div className="message">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum illum nemo aspernatur corporis, praesentium odio placeat, impedit ut officiis rerum aut ipsa nisi culpa eum soluta nesciunt id. Quos, dolore!
            </div>
          </div>
        </main>
        <div className="chat">

        </div>
      </>
    );
    // todo: chat form
  }
}

export default Chat;