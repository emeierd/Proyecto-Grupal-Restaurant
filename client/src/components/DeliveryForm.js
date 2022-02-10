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
    if (item.catidad) productsCantidad.push(item.catidad);
  });
  const total = 0;
  products.forEach((item) => total + item.precioTotal);

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
    console.log(
      name,
      lastName,
      email,
      productsId,
      productsNames,
      productsCantidad
    );
    axios.post("api/pedido/create", {
      name: name,
      lastName: lastName,
      email: email,
      canal: "delivery",
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
            Numero de contacto:
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
        <Col className="col-md-4">
          <Form.Label className="text-primary" htmlFor="comuna">
            Comuna
          </Form.Label>
        </Col>
        <Col>
          <Form.Select type="comuna" name="comuna">
            <option value="1">Cerrillos</option>
            <option value="1">Cerro Navia</option>
            <option value="1">Conchalí</option>
            <option value="1">El Bosque</option>
            <option value="1">Estación Central</option>
            <option value="1">Huechuraba</option>
            <option value="1">Independencia</option>
            <option value="1">La Florida</option>
            <option value="1">La Cisterna</option>
            <option value="1">La Granja</option>
            <option value="1">La Pintana</option>
            <option value="1">La Reina</option>
            <option value="1">Las Condes</option>
            <option value="1">Lo Barnechea</option>
            <option value="1">Lo Espejo</option>
            <option value="1">Lo Prado</option>
            <option value="1">Macul</option>
            <option value="1">Maipú</option>
            <option value="1">Ñuñoa</option>
            <option value="1">Pedro Aguirre Cerda</option>
            <option value="1">Ñuñoa</option>
            <option value="1">Peñalolén</option>
            <option value="1">Providencia</option>
            <option value="1">Pudahuel</option>
            <option value="1">Quilicura</option>
            <option value="1">Quinta Normal</option>
            <option value="1">Recoleta</option>
            <option value="1">Renca</option>
            <option value="1">San Joaquín</option>
            <option value="1">San Miguel</option>
            <option value="1">San Ramón</option>
            <option value="1">Santiago</option>
            <option value="1">Vitacura</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="fila">
        <Col className="col-md-4">
          <Form.Label className="text-primary" htmlFor="direccion">
            Direccion
          </Form.Label>
        </Col>
        <Col>
          <Form.Control type="text" name="direccion" />
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
