// src/Components/Footer.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h6 className="mb-1">Resume Generator</h6>
            <small>&copy; {new Date().getFullYear()} All rights reserved.</small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/yourusername" className="text-light me-3" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-light" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
