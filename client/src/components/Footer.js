import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const today = new Date();
  return (
    <footer class="mt-auto text-secondary bg-dark text-center">
      <Container fluid className="py-5">
        <Row>
          <Col>
            <p fontSize={32} className="text-primary fs-3">
              Av. Suecia #1234, Providencia
            </p>
            <p className="text-primary fs-4">+56 2 23298754</p>
          </Col>
          <Col>
            <p fontSize={32} className="text-primary fs-3">
              Estamos Abiertos:
            </p>
            <p className="text-primary fs-4">Lunes - Domingo: 12pm - 2am</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid className="py-1">
        <Row className="py-3">
          <Col>
            <FaWhatsapp fontSize={27} className="mx-3"/>
            <FaFacebookF fontSize={27} className="mx-3"/>
            <FaInstagram fontSize={27} className="mx-3"/>
          </Col>
        </Row>
        <Row>
          <p>Copyright © {today.getFullYear()} - MERN Group November 21</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
