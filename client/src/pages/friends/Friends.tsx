import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { UserContext } from './../../actions/mainContext';
import { useHistory } from 'react-router-dom';

import { Popup } from './../../components/Popup';

function Friends(): JSX.Element {

  const history = useHistory();
  const [friends, setFriends] = useState<{ name: string }[]>([{ name: '' }]);
  const { user } = useContext(UserContext);

  async function getFriends(): Promise<void> {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-auth-token", user.jwtToken);

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {

      const response = await fetch("http://localhost:5000/f/get", requestOptions);
      response.ok ? setFriends(await response.json()) : alert('service is not available');

    } catch (err) {
      alert('service is not available');
    }

  }

  useEffect((): void => {
    if (!user.jwtToken) history.push('/login');
    else getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [display, setDisplay] = useState<'none' | 'block'>('none');

  return (
    <>
      <Nav />
      <main>
        <Popup hBodyName="friendName" displayName="friend's name" display={display} setDisplay={setDisplay} />
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
          !friends.length
            ? <h1 style={{ textAlign: 'center' }}>You don't have any friends :&#40;</h1>
            : friends.map((friend, i) => {
              return (
                <div className="group" key={i}>
                  <div className="group-logo"></div>
                  <div className="group-name">
                    <h1>{friend.name}</h1>
                  </div>
                </div>
              )
            })
        }
      </main>
    </>
  );
}

export default Friends;