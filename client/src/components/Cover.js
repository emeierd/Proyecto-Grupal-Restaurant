import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Cover = () => {
  return (
    <div className="bg-dark text-light cover">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">¿Qué se te antoja hoy?</h1>
        <p className="col-md-8 fs-4">
          Tenemos la mejor selección de pizzas para tí.
        </p>
        <div className="col-6 col-md-2 d-grid gap-2">
          <Button
            as={Link}
            to={"/pickup"}
            variant="primary"
            className="rounded-pill"
          >
            Retiro en local
          </Button>
          <Button
            as={Link}
            to={"/delivery"}
            className="rounded-pill custom-primary"
          >
            Delivery
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
