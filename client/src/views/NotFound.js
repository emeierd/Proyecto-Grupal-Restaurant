import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Notfound = () => {
  return (
    <Container fluid className="d-flex text-center text-secondary cover-container">
      <Container className="d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3 lost">
          <h1>¿Te perdiste?</h1>
          <p class="lead">No te preocupes, te ayudamos a volver.</p>
          <Button as={Link} to={"/"} className="custom-primary">
            Volver al Home
          </Button>
        </main>
      </Container>
    </Container>
  );
};

export default Notfound;
