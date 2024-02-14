import Carousel from "react-bootstrap/Carousel";
import "./ImgCarosel.css";

// Img Import ======================
import img1 from "../../assets/1.jpg";
import img1_2 from "../../assets/1.2.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";

function ImgCarosel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img1_2}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img5}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img6}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src={img7}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarosel;
