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
  const [comuna, setComuna] = useState("");
  const [direccion, setDireccion] = useState("");
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
      canal: "delivery",
      productos: {
        ids: productsId,
        nombres: productsNames,
        cantidades: productsCantidad,
      },
      total: total,
      comuna: comuna,
      direccion: direccion,
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
          <Form.Select
            type="comuna"
            name="comuna"
            onChange={(e) => setComuna(e.target.value)}
          >
            <option value="Cerrillos">Cerrillos</option>
            <option value="Cerro Navia">Cerro Navia</option>
            <option value="Conchalí">Conchalí</option>
            <option value="El Bosque">El Bosque</option>
            <option value="Estación Central">Estación Central</option>
            <option value="Huechuraba">Huechuraba</option>
            <option value="Independencia">Independencia</option>
            <option value="La Florida">La Florida</option>
            <option value="La Cisterna">La Cisterna</option>
            <option value="La Granja">La Granja</option>
            <option value="La Pintana">La Pintana</option>
            <option value="La Reina">La Reina</option>
            <option value="Las Condes">Las Condes</option>
            <option value="Lo Barnechea">Lo Barnechea</option>
            <option value="Lo Espejo">Lo Espejo</option>
            <option value="Lo Prado">Lo Prado</option>
            <option value="Macul">Macul</option>
            <option value="Maipú">Maipú</option>
            <option value="Ñuñoa">Ñuñoa</option>
            <option value="Pedro Aguirre Cerda">Pedro Aguirre Cerda</option>
            <option value="Ñuñoa">Ñuñoa</option>
            <option value="Peñalolén">Peñalolén</option>
            <option value="Providencia">Providencia</option>
            <option value="Pudahuel">Pudahuel</option>
            <option value="Quilicura">Quilicura</option>
            <option value="Quinta Normal">Quinta Normal</option>
            <option value="Recoleta">Recoleta</option>
            <option value="Renca">Renca</option>
            <option value="San Joaquín">San Joaquín</option>
            <option value="San Miguel">San Miguel</option>
            <option value="San Ramón">San Ramón</option>
            <option value="Santiago">Santiago</option>
            <option value="Vitacura">Vitacura</option>
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
          <Form.Control
            type="text"
            name="direccion"
            onChange={(e) => setDireccion(e.target.value)}
          />
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
