import Glider from "react-glider";
import "glider-js/glider.min.css";
import "./styles.css";

export default function Carrusel() {
  return (
    <div className="App">
      <div className="container">
        <Glider
          hasArrows
          slidesToShow={3}
          slidesToScroll={3}
          scrollLock
          hasDots
        >
          <div className="slide">1</div>
          <div className="slide">2</div>
          <div className="slide">3</div>
          <div className="slide">4</div>
          <div className="slide">5</div>
          <div className="slide">6</div>
          <div className="slide">7</div>
          <div className="slide">8</div>
          <div className="slide">9</div>
          <div className="slide">10</div>
          <div className="slide">11</div>
          <div className="slide">12</div>
        </Glider>
      </div>
    </div>
  );
}
