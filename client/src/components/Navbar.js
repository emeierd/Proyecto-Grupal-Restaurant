import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="navbar"
    >
      <Container fluid className="fs-5">
        <Navbar.Brand className="me-5">
          <Link to={"/"}>
            <img src={images.logo} alt="" height="80px" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Pedir" menuVariant="dark">
              <NavDropdown.Item as={Link} to={"/"}>
                Retiro en Local
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/"}>
                Delivery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/menu"}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/reservas"}>
              Reservas
            </Nav.Link>
            <Nav.Link as={Link} to={"/tragos"}>
              Tragos
            </Nav.Link>
            <Nav.Link as={Link} to={"/fiestas"}>
              Fiestas
            </Nav.Link>
            <Nav.Link as={Link} to={"/contacto"}>
              Contacto
            </Nav.Link>
          </Nav>
          <Navbar.Text className="d-flex">
              <FaWhatsapp fontSize={27} className="mx-3" />
              <FaFacebookF fontSize={27} className="mx-3" />
              <FaInstagram fontSize={27} className="mx-3" />
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
