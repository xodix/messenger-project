import React from 'react';
import './style/info.scss';
import slider1 from './style/img/slider1.jpg';
import slider2 from './style/img/slider2.jpg';
import slider3 from './style/img/slider3.jpg';
import { Link } from 'react-router-dom';

interface state {
  slide: string,
  i: number,
  interval: number
}

export default class Info extends React.Component {
  state: state

  constructor(props) {
    super(props);
    this.state = {
      slide: slider1,
      i: 1,
      interval: 0
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const slider = document.getElementById('slider');
      if (slider) slider.className = "";
      setTimeout(() => {
        if (slider) slider.className = "fade-out"
      }, 1000)
      setTimeout(() => {
        if (this.state.i === 1) {
          this.setState({
            slide: slider2,
            i: 2
          });
        } else if (this.state.i === 2) {
          this.setState({
            slide: slider3,
            i: 3
          });
        } else {
          this.setState({
            slide: slider1,
            i: 1
          });
        }
      }, 2000);
      setTimeout(() => {
        if (slider) slider.className = "fade-in"
      }, 2000)
    }, 9000);
    this.setState({
      interval: interval
    });
  }

  render() {
    return (
      <div className="container">
        <div className="half">
          <header>Contact your friends.</header>
          <Link to="/login">
            <button className="bigger">Start</button>
          </Link>
        </div>
        <div className="half">
          <img src={this.state.slide} className="fade-in" id="slider" alt="slider" />
        </div>
      </div>
    )
  }
}