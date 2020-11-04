import React from 'react';
import './styles/info.scss'


export default class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      slide: ''
    }
  }
  componentDidMount() {
    setInterval(() => {

    }, 20000);
  }
  render() {
    return (
      <div className="half">
        <header>Contact your friends.</header>
        <button>Start</button>
      </div>
    )
  }
}