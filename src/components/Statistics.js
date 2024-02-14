import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Statistics.css";

// Img Import ======================
import logo1 from "../assets/client-logo-1.jpg";
import logo2 from "../assets/c-logo2.jpeg";
import logo3 from "../assets/c-logo3.jpeg";
import logo4 from "../assets/c-logo4.jpeg";

function Statistics() {
  return (
    <Container className="StaticContainer">
      <h4>Statistics</h4>
      <Row className="staticRow">
        <Col sm={4} className="staticCard">
          <div>750+ Ton</div>
          <span>Yearly Production</span>
        </Col>
        <Col sm={4} className="staticCard">
          <div>10+</div>
          <span>Clients</span>
        </Col>
        <Col sm={4} className="staticCard">
          <div>15+</div>
          <span>Products</span>
        </Col>
      </Row>

      <h4>Our Clients</h4>
      <Row className="clientRow">
        <Col sm={3} className="clientCard">
          <img src={logo4} alt="client" />
        </Col>
        <Col sm={3} className="clientCard">
          <img src={logo3} alt="client" />
        </Col>
        <Col sm={3} className="clientCard">
          <img src={logo1} alt="client" />
        </Col>
        <Col sm={3} className="clientCard">
          <img src={logo2} alt="client" />
        </Col>
      </Row>
    </Container>
  );
}

export default Statistics;
