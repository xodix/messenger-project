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
          this.setState({
            people: resolve.map((elem, i) => {
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
          })
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