import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { UserContext } from './../../actions/mainContext'
import { useHistory } from 'react-router-dom';

import { Popup } from './../../components/Popup';

function Chats() {
  const history = useHistory();
  const [groups, setGroups] = useState<{ name: string }[]>([{ name: '' }]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.jwtToken) history.push('/login');
    else {

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-auth-token", user.jwtToken);

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/g/get", requestOptions)
        .then(response => response.json())
        .then(result => setGroups(result), err => console.error(err));

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [display, setDisplay] = useState<'none' | 'block'>('none');

  return (
    <>
      <Nav />
      <Popup hBodyName="groupCode" displayName="group code" display={display} setDisplay={setDisplay} />
      <main>
        <button
          style={{
            borderRadius: '50%',
            width: '2em',
            fontSize: '1.5em',
            margin: 'auto'
          }}
          onClick={() => setDisplay('block')}
        >
          +
        </button>
        {
          !groups.length
            ? <h1 style={{ textAlign: 'center' }}>You aren't involved in any groups!</h1>
            : groups.map((group, i) => {
              return (
                <div className="group" key={i}>
                  <div className="group-logo"></div>
                  <div className="group-name">
                    <h1>{group.name}</h1>
                  </div>
                </div>
              )
            })
        }
      </main>
    </>
  )
}

export default Chats;