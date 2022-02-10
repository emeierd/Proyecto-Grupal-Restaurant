import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const DrinkSection = () => {
  return (
    <div className="bg-dark text-light drink">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">Más que solo Pizza</h1>
        <p className="col-md-8 fs-4">
          La pizza es lo mejor, pero pizza y tragos son la perfección.
        </p>
        <div className="col-6 col-md-2 d-grid gap-2">
          <Button
            as={Link}
            to={"/tragos"}
            variant="outline-light"
            className="rounded-pill"
          >
            Menú de Tragos
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DrinkSection;
