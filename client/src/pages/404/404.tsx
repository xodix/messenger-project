import React from 'react';

interface state {
  loading: boolean
}

class p404 extends React.Component {
  state: state
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return <img
      src="https://http.cat/404.jpg"
      alt="A http cat"
      style={
        {
          margin: 'auto',
          display: "block",
          width: "60%"
        }
      }
    />
  };
}

export default p404;