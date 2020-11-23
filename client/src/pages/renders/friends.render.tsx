import React from 'react';

function Render(): JSX.Element {

  const [people, setPeople] = React.useState<JSX.Element>(<>Loading...</>)
  const [userId] = React.useState("5fa80f5527ffc64b8ceccef7");

  React.useEffect(() => {
    fetch('/f/get', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "userId": "5fa80f5527ffc64b8ceccef7"
      })
    })
      .then(res => res.json())
      .then(
        (resolve) => {
          setPeople(
            resolve.map((elem, i) => {
              return <li key={i}>{elem.id1 === userId ? elem.id1 : elem.id2}</li>;
            })
          );
        },
        (reject) => console.error(reject)
      );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul>
      {people}
    </ul>
  );
}


export default Render;