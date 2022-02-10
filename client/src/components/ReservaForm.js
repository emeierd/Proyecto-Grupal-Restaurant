import React, { useState } from "react";
import axios from "axios";
import validation from "./actions/validation";
import { Button, Col, Form, Row } from "react-bootstrap";

const ReservaForm = ({ personas, turnoId }) => {
  const [nameValidation, setNameValidation] = useState({
    valid: false,
    text: null,
  });
  const [lastNameValidation, setLastNameValidation] = useState({
    valid: false,
    text: null,
  });
  const [emailValidation, setEmailValidation] = useState({
    valid: false,
    text: null,
  });

  const validate = (e) => {
    switch (e.target.name) {
      case "name":
        setNameValidation(validation(e.target.name, e.target.value));
        break;
      case "lastName":
        setLastNameValidation(validation(e.target.name, e.target.value));
        break;
      case "email":
        setEmailValidation(validation(e.target.name, e.target.value));
        break;
      default:
        return null;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formEl = e.target.closest("form");
    const formData = new FormData(formEl);
    const entries = {};
    for (let [key, value] of formData.entries()) entries[key] = value.trim();
    entries.personas = personas;
    entries.turnoId = turnoId;
    console.log(entries);
    console.log(nameValidation.valid);
    if (
      nameValidation.valid &&
      lastNameValidation.valid &&
      emailValidation.valid
    ) {
      try {
        const res = await axios.post("/api/reserva/create", entries);
        console.log(res);
        alert("Reservado!");
        e.target.reset();
      } catch (err) {
        console.error(err);
        alert("Error, try again");
      }
    } else {
      alert("Form doesn't match all requirements");
    }
  };

  return (
    <>
      <Row>
        <Col className="bg-dark text-center"></Col>
        <Col md="auto">
          <form className="register" onSubmit={onSubmit}>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Label className="text-primary" htmlFor="name">
                  Nombre
                </Form.Label>{" "}
                {nameValidation.text}
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  onChange={validate}
                />
              </Col>
            </Row>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Label className="text-primary" htmlFor="lastName">
                  Apellido
                </Form.Label>{" "}
                {lastNameValidation.text}
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={validate}
                />
              </Col>
            </Row>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Label className="text-primary" htmlFor="email">
                  Email
                </Form.Label>{" "}
                {emailValidation.text}
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  onChange={validate}
                />
              </Col>
            </Row>
            <Row className="fila">
              <Button variant="outline-primary row-2" type="submit">
                Solicitar reserva
              </Button>
            </Row>
          </form>
        </Col>
        <Col className="bg-dark text-center"></Col>
      </Row>
    </>
  );
};

export default ReservaForm;
