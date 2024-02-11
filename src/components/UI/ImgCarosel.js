import Carousel from "react-bootstrap/Carousel";
import "./ImgCarosel.css";

function ImgCarosel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{ maxHeight: "70vh" }}
          className="d-block w-100"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/solar-and-paper-sixteen_nine.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "70vh" }}
          src="https://media.istockphoto.com/id/687382108/photo/at-paper-making-factory.jpg?s=612x612&w=0&k=20&c=Osdor2s7f44naAdtX75dkYwj7Mdu4W1NizO08jdw8JM="
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarosel;
