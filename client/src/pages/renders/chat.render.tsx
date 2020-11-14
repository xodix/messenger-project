import React from 'react';

interface state {
  people: JSX.Element
}

class Render extends React.Component {
  state: state;
  constructor(props) {
    super(props);
    this.state = {
      people: <>Loading...</>
    };
  }

  componentDidMount() {
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
          this.setState({
            people: resolve.map((elem, i) => {
              return (
                <div className="message-group" key={i}>
                  <div className="nick-name">user:</div>
                  <div className="message">
                    {elem.content}
                  </div>
                </div>
              );
            })
          });
        },
        (reject) => console.error(reject)
      );
  }
  render() {
    return (
      <>
        {this.state.people}
      </>
    );
  }
}

export default Render;