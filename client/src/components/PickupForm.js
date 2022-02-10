import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import validation from "./actions/validation";

const DeliveryForm = ({ products }) => {
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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const productsId = [];
  products.forEach((item) => productsId.push(item.idpizza));
  const productsNames = [];
  products.forEach((item) => productsNames.push(item.nombre));
  const productsCantidad = [];
  products.forEach((item) => {
    if (item.cantidad) productsCantidad.push(item.cantidad);
    else productsCantidad.push(1);
  });
  let total = 0;
  products.forEach((item) => (total += Number(item.precioTotal)));

  const validate = (e) => {
    switch (e.target.name) {
      case "name":
        setNameValidation(validation(e.target.name, e.target.value));
        setName(e.target.value);
        break;
      case "lastName":
        setLastNameValidation(validation(e.target.name, e.target.value));
        setLastName(e.target.value);
        break;
      case "email":
        setEmailValidation(validation(e.target.name, e.target.value));
        setEmail(e.target.value);
        break;
      default:
        return null;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("api/pedido/create", {
      name: name,
      lastName: lastName,
      email: email,
      canal: "retiro en local",
      productos: {
        ids: productsId,
        nombres: productsNames,
        cantidades: productsCantidad,
      },
      total: total,
    });
  };

  return (
    <Form className="mt-5 w-75 bg-dark text-center" onSubmit={onSubmit}>
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
          <Form.Label className="text-primary" htmlFor="phone">
            Numero de contacto
          </Form.Label>
        </Col>
        <Col>
          <Form.Control type="text" name="phone" onChange={validate} />
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
        <Button
          variant="outline-primary row-2"
          type="submit"
          onSubmit={onSubmit}
        >
          Solicitar pedido
        </Button>
      </Row>
    </Form>
  );
};

export default DeliveryForm;
