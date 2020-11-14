import React from 'react';

interface state {
  people: JSX.Element,
  userId: string
}

class Render extends React.Component {

  state: state;
  constructor(props) {
    super(props);
    this.state = {
      people: <>Loading...</>,
      userId: "5fa80f5527ffc64b8ceccef7"
    };
  }

  componentDidMount() {
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
          this.setState({
            people: resolve.map((elem, i) => {
              return <li key={i}>{elem.id1 === this.state.userId ? elem.id1 : elem.id2}</li>;
            })
          });
        },
        (reject) => console.error(reject)
      );
  }

  render() {
    return (
      <ul>
        {this.state.people}
      </ul>
    );
  }

}

export default Render;