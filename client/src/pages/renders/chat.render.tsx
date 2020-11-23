import React from 'react';

function Render() {

  const [people, setPeople] = React.useState<JSX.Element>(<>Loading...</>);

  React.useEffect(() => {
    fetch('/m/get', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "chatId": "5fa5bb4fe70d5c3814f8b125"
      })
    })
      .then(res => res.json())
      .then(
        (resolve) => {
          setPeople(
            resolve.map((elem, i) => {
              return (
                <div className="message-group" key={i}>
                  <div className="nick-name">user:</div>
                  <div className="message">
                    {elem.content}
                  </div>
                </div>
              );
            })
          );
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