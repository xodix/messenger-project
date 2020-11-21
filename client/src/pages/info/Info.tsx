import React from "react";
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";
import { Link } from "react-router-dom";

export default class Info extends React.Component {
  state: {
    slide: string;
    i: number;
    interval: number;
  };

  constructor(props) {

    super(props);
    this.state = {
      slide: slider1,
      i: 1,
      interval: 0,
    };

  }

  componentWillUnmount(): void {

    clearInterval(this.state.interval);

  }

  componentDidMount(): void {
    document.getElementsByTagName('body')[0].style.marginBottom = "0";
    const slider = document.getElementById("slider");

    const interval = setInterval(() => {

      slider!.animate([{ opacity: 1 }, { opacity: .6 }], {duration: 1000, easing: 'linear'});
      slider!.style.opacity = ".6";

      setTimeout(() => {
        if (this.state.i === 1) {
          this.setState({
            slide: slider2,
            i: 2,
          });
        } else if (this.state.i === 2) {
          this.setState({
            slide: slider3,
            i: 3,
          });
        } else {
          this.setState({
            slide: slider1,
            i: 1,
          });
        }
      }, 1000);

    }, 9000);

    this.setState({
      interval: interval,
    });

  }

  handleImgLoad(): void {

    const slider = document.getElementById("slider");
    slider!.animate([{ opacity: .6 }, { opacity: 1 }], {duration: 1000, easing: 'linear'});
    slider!.style.opacity = "1";

  }

  render(): JSX.Element {

    return (
      <div className="container">
        <div className="half">
          <header>Contact your friends.</header>
          <Link to="/login">
            <button className="bigger">Start</button>
          </Link>
        </div>
        <div className="half">
          <img src={this.state.slide} id="slider" alt="slider" onLoad={this.handleImgLoad}/>
        </div>
      </div>
    );
  }

}