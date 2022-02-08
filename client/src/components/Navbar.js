import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to={"/"}>
          <img src={images.logo} alt="" height="80px" />{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Pedir" menuVariant="dark">
            <NavDropdown.Item as={Link} to={"/"}>
              Retiro en Local
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/"}>
              Delivery
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to={"/"}>
            Menu
          </Nav.Link>
          <Nav.Link as={Link} to={"/reservas"}>
            Reservas
          </Nav.Link>
          <Nav.Link as={Link} to={"/"}>
            Tragos
          </Nav.Link>
          <Nav.Link as={Link} to={"/fiestas"}>
            Fiestas
          </Nav.Link>
          <Nav.Link as={Link} to={"/"}>
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
