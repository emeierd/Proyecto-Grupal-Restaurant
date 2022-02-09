import React, { useState } from "react";
import axios from "axios";
import validation from "./actions/validation";
import { Button, Form, FormLabel } from "react-bootstrap";

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
    <Form className="register" onSubmit={onSubmit}>
      <Form.Group className="col-md-3">
        <FormLabel>Personas</FormLabel> {personasValidation.text}
        <Form.Control
          type={"number"}
          name="personas"
          defaultValue={10}
          min={"10"}
          max={"50"}
          onChange={validate}
        />
      </Form.Group>
      <div>
        <label htmlFor="name">Name</label> {nameValidation.text}
      </div>
      <input type="text" name="name" onChange={validate} />
      <div>
        <label htmlFor="lastName">Lastname</label> {lastNameValidation.text}
      </div>
      <input type="text" name="lastName" onChange={validate} />
      <div>
        <label htmlFor="email">Email</label> {emailValidation.text}
      </div>
      <input type="email" name="email" onChange={validate} />
      <Button variant="outline-primary" type="submit">Solicitar reserva</Button>
    </Form>
  );
};

export default FiestaForm;
