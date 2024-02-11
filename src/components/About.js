import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container className="AboutContainer">
      <Row>
        <Col sm={6} className="aboutImgCol">
          <img
            src="https://t3.ftcdn.net/jpg/02/67/15/54/360_F_267155492_0HGlA3se7l7ZIJbZ2bAdkCTG8FuCGTg6.jpg"
            alt="img"
          />
        </Col>
        <Col sm={6} className="aboutInfoCol">
          <h2>New Mahesh Industries</h2>
          <p>
            We are an eco-conscious organization committed to the manufacturing
            and supplying of premium quality paper made from agro and wood
            materials. Our aim is to conserve resources and protect the
            environment through innovative and sustainable practices. Founded in
            1980 in the village of Saila Khurd, located in District Hoshiarpur,
            Punjab, India, our mill was established with a clear purpose, that
            is, to harness the untapped potential of Agro vegetations such as
            Sarkanda Grass, Kahi Grass, and agro-residues like Wheat straw and
            Bagasse for manufacturing writing and printing paper of premium
            quality. These residues were traditionally burnt in fields,
            contributing to environmental pollution. By repurposing them for
            paper production, we were successful in mitigating this ecological
            degradation.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
