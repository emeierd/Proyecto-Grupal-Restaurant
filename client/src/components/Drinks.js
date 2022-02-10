import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/css/estilos.css";

const Drinks = () => {
  const [tragos, setTragos] = useState([]);
  useEffect(() => {
    const getTragos = async () => {
      try {
        const { data } = await axios.get("/api/tragos");
        return { succes: true, data };
      } catch (err) {
        console.log(err);
      }
    };
    getTragos().then(({ data }) => {
      setTragos(data);
    });
  }, []);

  return (
    <div className="drinkview bg-dark text-center">
      <h3 className="text-primary text-center">Nuestros Tragos:</h3>
      <Row className="fila">
        {tragos.map(({ _id, title, price, size }) => (
          <>
            <Row>
              <Col className="col-lg-4"></Col>
              <Col className="text-primary" key={_id}>
                {title}
              </Col>
              <Col className="text-light">${price}</Col>
            </Row>
            <Row>
              <Col className="col-lg-4"></Col>
              <Col className="text-secondary fila col-lg-auto"> {size}</Col>
              <Col className="col-lg-4"></Col>
            </Row>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Drinks;
