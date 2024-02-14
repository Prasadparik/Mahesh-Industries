import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Products.css";

// Img Import ======================
import prodImg1 from "../assets/1prodImg.jpeg";
import prodImg2 from "../assets/prodImg2.jpeg";
import prodImg3 from "../assets/prodImg3.jpeg";
import prodImg4 from "../assets/prodImg4.jpeg";
import prodImg5 from "../assets/prodImg5.jpeg";
import prodImg6 from "../assets/prodImg6.jpeg";
import prodImg7 from "../assets/prodImg7.jpeg";

function Products() {
  return (
    <Container className="prodContainer">
      <h4>Our Products</h4>
      <Row>
        <Col sm={4} className="prodCol">
          <div className="prodCard">
            <img src={prodImg1} alt="prodImg" />
            <div className="prodTitle">Sun Dry Board (Pure Craft)</div>
            <div className="prodDescription">
              <b> GSM: </b>
              <i> 26°,28°,32°,36°,40°, 44° & as per requirement.</i>
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img src={prodImg4} alt="prodImg" />
            <div className="prodTitle">Box Files</div>
            <div className="prodDescription">
              <i> All types of Box Files.</i>
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img src={prodImg5} alt="prodImg" />
            <div className="prodTitle">Premium Box Files.</div>
            <div className="prodDescription">
              <i>All types of high quality Box Files.</i>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="prodCol">
          <div className="prodCard">
            <img src={prodImg6} alt="prodImg" />
            <div className="prodTitle">Quality Mount Board In Craft Board.</div>
            <div className="prodDescription">
              {/* Colored paper for GR books, publicity material, notebook */}
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img src={prodImg2} alt="prodImg" />
            <div className="prodTitle">4 Flap 2Flap.</div>
            <div className="prodDescription">
              {/* Colored paper for GR books, publicity material, notebook */}
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img src={prodImg3} alt="prodImg" />
            <div className="prodTitle">Cake base board.</div>
            <div className="prodDescription">
              {/* Colored paper for GR books, publicity material, notebook */}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="prodCol">
          <div className="prodCard">
            <img src={prodImg7} alt="prodImg" />
            <div className="prodTitle">Clip</div>
            <div className="prodDescription">
              <i> All types of file clips.</i>
            </div>
          </div>
        </Col>
        {/* <Col sm={4} className="">
          <div className="prodCard">
            <img src={prodImg2} alt="prodImg" />
            <div className="prodTitle">Title</div>
            <div className="prodDescription">
              Colored paper for GR books, publicity material, notebook
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="prodCard">
            <img src={prodImg3} alt="prodImg" />
            <div className="prodTitle">Title</div>
            <div className="prodDescription">
              Colored paper for GR books, publicity material, notebook
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Products;
