import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhatsApp from "./UI/WhatsApp"; // Import WhatsApp component
import "./footer.css";
function Footer() {
  return (
    <footer className="footerCOntainer">
      <Container>
        <Row>
          <Col md={6}>
            <img
              style={{ margin: "2rem 0" }}
              src="https://png.pngtree.com/template/20191111/ourmid/pngtree-mv-vm-letter-vector-logo-image_332121.jpg"
              className="C-logo"
              alt="logo"
            />
            <h5>Mahesh Industries</h5>
            <p>All type of paper products</p>
          </Col>
          <Col md={6}>
            <h5>Contact Information</h5>
            <p>
              Phone: <a href="tel:+919999999999">+91 9999999999</a>
            </p>
            <p>
              Address: P.No. B-58, M.I.D.C. Paithan, Dist. Aurangabad-431148
            </p>
          </Col>
        </Row>
      </Container>
      <WhatsApp phoneNumber="919999999999" />
    </footer>
  );
}

export default Footer;
