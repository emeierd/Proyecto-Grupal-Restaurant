import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../styles/css/estilos.css";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
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
      setPizzas(data);
    });
  }, []);

  const getProductos = (products) => {
    let productos = [];
    products.forEach(producto => productos.push(producto.title));
    return productos.join(", ");
  }

  return (
    <div>
      <h3 className="text-primary text-center">Nuestras Pizzas:</h3>
      <Row className="fila">
        {pizzas.map(({ _id, title, price, sauce, mass, size, products }) => (
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
                (salsa: {sauce}, masa: {mass}, tamaño: {size}) <br></br>
                Ingredientes:
                {getProductos(products)}
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
