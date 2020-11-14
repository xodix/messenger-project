import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <div className="logo"></div>
        <div className="right">
          <div className="nav-elem">
            <Link to="/chats">
              home
        </Link>
          </div>
          <div className="nav-elem">
            <Link to="/chats">
              chats
        </Link>
          </div>
          <div className="nav-elem">
            <Link to="/settings">
              settings
        </Link>
          </div>
        </div>
      </nav>
      <div className="spacer"></div>
    </>
  );
}

export default Nav;