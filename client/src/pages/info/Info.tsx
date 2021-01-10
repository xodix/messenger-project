import React, { useRef } from "react";
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";
import { Link } from "react-router-dom";

export default function Info(): JSX.Element {

  const [Slide, SetSlide] = React.useState<string>(slider1);
  document.getElementsByTagName('body')[0].style.marginBottom = "0";
  const slider = useRef<HTMLImageElement>(null);

  React.useEffect((): () => void => {

    let I: 1 | 2 | 3 = 1;

    const interval = setInterval((): void => {

      slider.current!.animate([{ opacity: 1 }, { opacity: .6 }], { duration: 1000, easing: 'linear' });
      slider.current!.style.opacity = ".6";

      setTimeout((): void => {

        if (I === 1) {
          SetSlide(slider2);
          I = 2;
        } else if (I === 2) {
          SetSlide(slider3);
          I = 3;
        } else {
          SetSlide(slider1);
          I = 1;
        }

      }, 1000);

    }, 9000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImgLoad = () => {

    slider.current!.animate([{ opacity: .6 }, { opacity: 1 }], { duration: 1000, easing: 'linear' });
    slider.current!.style.opacity = "1";

  }

  return (
    <div className="container">
      <div className="half">
        <header>Contact your friends.</header>
        <Link to="/register">
          <button className="bigger">Start</button>
        </Link>
      </div>
      <div className="half">
        <img src={Slide} ref={slider} id="slider" alt="slider" onLoad={handleImgLoad} />
      </div>
    </div>
  );


}