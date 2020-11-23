import React from "react";
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";
import { Link } from "react-router-dom";

export default function Info(): JSX.Element {

  const [Slide, SetSlide] = React.useState<string>(slider1);
  const [I, SetI] = React.useState<number>(1);
  document.getElementsByTagName('body')[0].style.marginBottom = "0";

  React.useEffect((): () => void => {
    const slider = document.getElementById("slider");

    const interval = setInterval(() => {

      slider!.animate([{ opacity: 1 }, { opacity: .6 }], {duration: 1000, easing: 'linear'});
      slider!.style.opacity = ".6";

      setTimeout(() => {
        if (I === 1) {
          SetSlide(slider2);
          SetI(2);
        } else if (I === 2) {
          SetSlide(slider3);
          SetI(3);
        } else {
          SetSlide(slider1);
          SetI(1);
        }
      }, 1000);

    }, 9000);

    return () => clearInterval(interval);

  }, [I, Slide]);

  const handleImgLoad = () => {

    const slider = document.getElementById("slider");

    slider!.animate([{ opacity: .6 }, { opacity: 1 }], {duration: 1000, easing: 'linear'});

    slider!.style.opacity = "1";

  }

  return (
    <div className="container">
      <div className="half">
        <header>Contact your friends.</header>
        <Link to="/login">
          <button className="bigger">Start</button>
        </Link>
      </div>
      <div className="half">
        <img src={Slide} id="slider" alt="slider" onLoad={handleImgLoad}/>
      </div>
    </div>
  );


}