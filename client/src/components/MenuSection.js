import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const MenuSection = () => {
  return (
    <div className="bg-dark text-info menu">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">¿Ya te dió hambre?</h1>
        <p className="col-md-8 fs-4">
          Revisa nuestro menú.
        </p>
        <div className="col-6 col-md-2 d-grid gap-2">
          <Button
            as={Link}
            to={"/menu"}
            className="rounded-pill custom-primary"
          >
            Menú
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MenuSection;
