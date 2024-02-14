import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";

// Img Import ======================
import img1 from "../assets/1.jpg";
import logo1 from "../assets/client-logo-1.jpg";

function About() {
  return (
    <Container className="AboutContainer">
      <Row>
        <Col sm={6} className="aboutImgCol">
          <img src={img1} alt="img" />
        </Col>
        <Col sm={6} className="aboutInfoCol">
          <h2>New Mahesh Industries</h2>
          <p>
            At Mahesh Industries, we take pride in being pioneers in the
            manufacturing of premium quality sun dry board pure craft products.
            With an unwavering commitment to excellence, we utilize the finest
            raw materials to create high-quality puttha, catering to the diverse
            needs of our clients in the production of various items such as box
            files, four-flap folders, two-flap folders, and bill books. Our
            Vision: Our vision at Mahesh Industries is to continue leading the
            industry with innovative solutions and superior craftsmanship. We
            strive to be the preferred choice for businesses seeking reliable
            and top-notch sun dry board pure craft products, while maintaining a
            steadfast dedication to sustainability, customer satisfaction, and
            growth.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
