import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Products.css";
function Products() {
  return (
    <Container className="prodContainer">
      <h4>Our Products</h4>
      <Row>
        <Col sm={4} className="prodCol">
          <div className="prodCard">
            <img
              src="https://www.printerland.co.uk/blog/wp-content/uploads/2019/01/a3-paper-stack.jpg"
              alt="prodImg"
            />
            <div className="prodTitle">Title</div>
            <div className="prodDescription">
              Colored paper for GR books, publicity material, notebook
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img
              src="https://www.printerland.co.uk/blog/wp-content/uploads/2019/01/a3-paper-stack.jpg"
              alt="prodImg"
            />
            <div className="prodTitle">Title</div>
            <div className="prodDescription">
              Colored paper for GR books, publicity material, notebook
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img
              src="https://www.printerland.co.uk/blog/wp-content/uploads/2019/01/a3-paper-stack.jpg"
              alt="prodImg"
            />
            <div className="prodTitle">Title</div>
            <div className="prodDescription">
              Colored paper for GR books, publicity material, notebook
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
