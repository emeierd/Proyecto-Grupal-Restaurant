import React, { useState } from "react";
import axios from "axios";
import validation from "./actions/validation";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../styles/css/estilos.css";

const FiestaForm = ({ fecha }) => {
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
  const [personasValidation, setPersonasValidation] = useState({
    valid: true,
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
      case "personas":
        setPersonasValidation(validation(e.target.name, e.target.value));
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
    if (
      nameValidation.valid &&
      lastNameValidation.valid &&
      emailValidation.valid &&
      personasValidation.valid
    ) {
      console.log(entries);
      entries.fecha = fecha;

      try {
        await axios.post("/api/fiesta/create", entries);
        alert("Solicitud exitosa!");
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
        <Col md="auto" className="bg-dark text-center">
          <Form className="register bg-dark text-center" onSubmit={onSubmit}>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Label className="text-primary">Personas</Form.Label>{" "}
                {personasValidation.text}
              </Col>
              <Col className="columna">
                <Form.Control
                  type={"number"}
                  name="personas"
                  defaultValue={10}
                  min={"10"}
                  max={"50"}
                  onChange={validate}
                />{" "}
              </Col>
            </Row>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Label className="text-primary" htmlFor="name">
                  Nombre
                </Form.Label>{" "}
                {nameValidation.text}
              </Col>
              <Col>
                <Form.Control type="text" name="name" onChange={validate} />
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
                <Form.Control type="text" name="lastName" onChange={validate} />
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
                <Form.Control type="email" name="email" onChange={validate} />
              </Col>
            </Row>
            <Row className="fila">
              <Button variant="outline-primary row-2" type="submit">
                Solicitar reserva
              </Button>
            </Row>
          </Form>
        </Col>
        <Col className="bg-dark text-center"></Col>
      </Row>
    </>
  );
};

export default FiestaForm;
