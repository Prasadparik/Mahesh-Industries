import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Statistics.css";

function Statistics() {
  return (
    <Container className="StaticContainer">
      <h4>Statistics</h4>
      <Row className="staticRow">
        <Col sm={4} className="staticCard">
          <div>50+</div>
          <span>Title name</span>
        </Col>
        <Col sm={4} className="staticCard">
          <div>50+</div>
          <span>Title name</span>
        </Col>
        <Col sm={4} className="staticCard">
          <div>50+</div>
          <span>Title name</span>
        </Col>
      </Row>

      <h4>Our Clients</h4>
      <Row className="clientRow">
        <Col sm={3} className="clientCard">
          <img
            src="https://www.shutterstock.com/image-vector/logo-template-paper-trade-company-260nw-1605969532.jpg"
            alt="client"
          />
        </Col>
        <Col sm={3} className="clientCard">
          <img
            src="https://www.shutterstock.com/image-vector/logo-template-paper-trade-company-260nw-1605969532.jpg"
            alt="client"
          />
        </Col>
        <Col sm={3} className="clientCard">
          <img
            src="https://www.shutterstock.com/image-vector/logo-template-paper-trade-company-260nw-1605969532.jpg"
            alt="client"
          />
        </Col>
        <Col sm={3} className="clientCard">
          <img
            src="https://www.shutterstock.com/image-vector/logo-template-paper-trade-company-260nw-1605969532.jpg"
            alt="client"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Statistics;
