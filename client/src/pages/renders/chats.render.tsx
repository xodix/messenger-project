import React from 'react';

function Render() {

  const[people, setPeople] = React.useState<JSX.Element>(<>Loading...</>);

  React.useEffect(() => {
    fetch('/g/get', {
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
              return (
                <a href="chats">
                  <div className="group">
                    <div className="group-logo"></div>
                    <div className="group-name">
                      <h1 key={i}>{elem.name}</h1>
                    </div>
                  </div>
                </a>
              );
            })
          )
        },
        (reject) => console.error(reject)
      );
  }, []);


  return (
    <>
      {people}
    </>
  );
}

export default Render;