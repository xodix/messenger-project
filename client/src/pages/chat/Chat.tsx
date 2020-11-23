export {};
// import React, {useState, useEffect} from 'react';
// import Nav from './../../components/Nav';
// import socketIOClient from 'socket.io-client';
// const ENDPOINT = "http://localhost:5000";

// function Chat() {
//   const [nick, setNick] = useState('anonymus');
//   const [response, setResponse] = useState([]);

//   useEffect(() => {
//     let socket = socketIOClient(ENDPOINT);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     document.getElementsByTagName('form')[0].addEventListener("submit", (e) => {
//       e.preventDefault();
//       socket.emit('message', { nick, content: e.target!.msg.value });
//       e.target!.msg.value = '';
//     })

//     socket.on("message", data => {
//       setResponse((state) => [...state, data]);
//     });

//     // ComponentWillUnmount... yeah veary intuative Facebook
//     return () => socket.disconnect();
//   }, []);
//     return (
//       <>
//         <Nav />
//         <main>
//     {
//     response.map(elem => {
//       return (
//         <div className="message-group">
//           <div className="nick-name">{elem.nick}</div>
//           <div className="message">{elem.content}</div>
//         </div>
//       );
//     })
//     }
//           <div className="chat">
//             <input type="text" className="chat-input" autoComplete='false' autoFocus />
//             <div className="send"></div>
//           </div>
//         </main>
//       </>
//     )
// }

// export default Chat;