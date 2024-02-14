import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhatsApp from "./UI/WhatsApp"; // Import WhatsApp component
import BrandPromo from "./UI/BrandPromo"; // Import WhatsApp component
import "./footer.css";
// Img Import ======================
import logo from "../assets/MI-logo.png";

function Footer() {
  return (
    <footer className="footerCOntainer">
      <Container>
        <Row>
          <Col md={6}>
            <img
              style={{ margin: "2rem 0" }}
              src={logo}
              className="C-logo"
              alt="logo"
            />
            <h5>New Mahesh Industries</h5>
            <p>
              <i>All type of paper products</i>
            </p>
          </Col>
          <Col md={6}>
            <h5>Contact Information</h5>
            <p>
              Phone: <a href="tel:+919763977717">+91 9763977717</a>
            </p>
            <p>
              Phone: <a href="tel:+919075348243">+91 9075348243</a>
            </p>
            <p>
              Address: P.No. B-58, M.I.D.C. Paithan, Dist. Aurangabad-431148
            </p>
          </Col>
        </Row>
      </Container>
      <BrandPromo />
      <WhatsApp phoneNumber="919999999999" />
    </footer>
  );
}

export default Footer;
