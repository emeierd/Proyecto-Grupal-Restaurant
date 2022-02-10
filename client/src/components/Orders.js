import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../styles/css/estilos.css";

const Orders = () => {
    const [pizzas, setPizzas] = useState([]);
    const [productos, setProductos] = useState([]);

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

    const itemCheck = (e) => {
        let prods = productos.slice();
        const idpizza = e.target.getAttribute('idpizza');
        const nombre = e.target.getAttribute('nombre');
        const precio = e.target.getAttribute('precio');
        if (e.target.checked) {
            console.table({ idpizza, nombre, precio })
            prods.push({ idpizza, nombre, cantidad: 1, precioUnitario: precio, precioTotal: precio });
            setProductos(prods);
        } else {
            prods = prods.filter(el => el.idpizza !== idpizza);
            setProductos(prods);
        }
    }

    const restar = (e, i) => {
        e.preventDefault();
        let prods = productos.slice();
        if (prods[i].cantidad > 1) {
            prods[i].cantidad -= 1;
            prods[i].precioTotal = prods[i].cantidad * prods[i].precioUnitario
        }
        setProductos(prods);
    }

    const sumar = (e, i) => {
        e.preventDefault();
        let prods = productos.slice();
        prods[i].cantidad += 1;
        prods[i].precioTotal = prods[i].cantidad * prods[i].precioUnitario
        setProductos(prods);
    }


    return (
        <div>
            <h3 className="text-primary text-center">Nuestras Pizzas:</h3>
            <Row className="fila">
                <Col>
                    {pizzas.map(({ _id, title, price, sauce, mass, size }) => (
                        <>
                            <Row>

                                <Col className="text-primary" key={_id}>
                                    {title}
                                </Col>
                                <Col className="text-light">${price}</Col>
                                <Col className="col-lg-4">
                                    <input type="checkbox" onChange={itemCheck} idpizza={_id} nombre={title} precio={price} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-secondary fila col-lg-auto">
                                    (salsa: {sauce}, masa: {mass}, tamano: {size})
                                </Col>
                                <Col className="col-lg-4"></Col>
                                <Col className="col-lg-4"></Col>
                            </Row>
                        </>
                    ))}
                </Col>
                <Col>
                    <Row>Carrito de compras</Row>
                    <Row>
                        <Col>Producto</Col>
                        <Col>Cantidad</Col>
                        <Col>$</Col>
                    </Row>
                    <Row>
                        {productos.length ? productos.map((producto, i) => <Row key={i}>
                            <Col>{producto.nombre}</Col>
                            <Col>
                                <Row>
                                    <Col><p onClick={e => restar(e, i)}>-</p></Col>
                                    <Col>{producto.cantidad}</Col>
                                    <Col><p onClick={e => sumar(e, i)}>+</p></Col>
                                </Row>
                            </Col>
                            <Col>{producto.precioTotal}</Col>

                        </Row>) : null}
                    </Row>
                    <Row>
                        {"form"}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Orders;