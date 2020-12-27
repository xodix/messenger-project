import React, { useState, useEffect } from 'react';
import Nav from './../../components/Nav';
import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://localhost:5000/";

function Chat(): JSX.Element {

  const [nick] = useState<string>('anonymus');
  const [response, setResponse] = useState<any[]>([]);

  useEffect((): any => {
    let socket = socketIOClient(ENDPOINT);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    document.getElementsByClassName('send')[0].addEventListener("click", (e: any): void => {
      const input: HTMLInputElement = document.getElementsByName('msg')[0] as HTMLInputElement;
      socket.emit('message', { nick, content: input.value })
    });

    socket.on("message", (data: { nick: string, content: string }): void => {
      setResponse([...response, data]);
    });

    // ComponentWillUnmount... yeah veary intuative Facebook
    return () => socket.disconnect();
  }, [nick, response]);

  return (
    <>
      <Nav />
      <main>
        {
          response.map((elem, i) => {
            return (
              <div className="message-group" key={i}>
                <div className="nick-name">{elem.nick}</div>
                <div className="message">{elem.content}</div>
              </div>
            );
          })
        }
        <div className="chat">
          <input type="text" className="chat-input" autoComplete='false' autoFocus name="msg" />
          <input type="submit" className="send" />
        </div>
      </main>
    </>
  );

}

export default Chat;