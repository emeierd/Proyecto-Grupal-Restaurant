import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Notfound = () => {
  return (
    <Container
      fluid
      className="d-flex text-center text-secondary cover-container"
    >
      <main className="px-3 py-5">
        <h1>¿Te perdiste?</h1>
        <p class="lead">No te preocupes, te ayudamos a volver.</p>
        <Button as={Link} to={"/"} className="custom-primary">
          Volver al Home
        </Button>
      </main>
    </Container>
  );
};

export default Notfound;
