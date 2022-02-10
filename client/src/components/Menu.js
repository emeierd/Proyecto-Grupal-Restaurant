import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../styles/css/estilos.css";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const getPizzas = async (data) => {
    try {
      await axios.get("http://localhost:8000/api/pizzas", data);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  };
  useEffect(() => {
    const getPizzas = async () => {
      try {
        const { data } = await axios.get("/api/pizzas");
        return { succes: true, data };
      } catch (err) {
        console.log(err);
      }
    };
    getPizzas().then(({ data }) => {
      console.log(data);
      setPizzas(data);
    });
  }, []);

  return (
    <div>
      <h3 className="text-primary text-center">Nuestras Pizzas:</h3>
      <Row className="fila">
        {pizzas.map(({ _id, title, price, sauce, mass, size }) => (
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
              <Col className="text-secondary fila col-lg-auto">
                (salsa: {sauce}, masa: {mass}, tamano: {size})
              </Col>
              <Col className="col-lg-4"></Col>
            </Row>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
