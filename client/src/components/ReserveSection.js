import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";

const ReserveSection = () => {
  return (
    <div className="bg-dark text-light reserves">
      <Row>
        <Col md={6} className="reserves-cover"></Col>
        <Col md={6}>
          <Container fluid className="py-5 px-5 reserves-text">
            <h1 className="display-5 fw-bold">¿Ya te dió hambre?</h1>
            <p className="col-md-8 fs-4">Revisa nuestro menú.</p>
            <div className="col-6 col-md-3 d-grid gap-2">
              <Button
                as={Link}
                to={"/reservas"}
                variant="outline-light"
                className="rounded-pill"
              >
                Reservas
              </Button>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default ReserveSection;
