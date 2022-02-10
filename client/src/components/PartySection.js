import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";

const PartySection = () => {
  return (
    <div className="bg-primary text-light party">
    <Row>
      <Col md={6}>
        <Container fluid className="py-5 px-5 party-text">
          <h1 className="display-5 fw-bold">¿Planeas una Fiesta?</h1>
          <p className="col-md-8 fs-4">Toma asiento, relajate y deja que nosotros te ayudemos a realizar la fiesta privada perfecta!</p>
          <div className="col-6 col-md-3 d-grid gap-2">
            <Button
              as={Link}
              to={"/fiestas"}
              variant="outline-light"
              className="rounded-pill"
            >
              Planifica ahora
            </Button>
          </div>
        </Container>
      </Col>
      <Col md={6} className="party-cover"></Col>
    </Row>
  </div>
  );
};

export default PartySection;
