import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/css/estilos.css";

const AboutUs = () => {
  return (
    <div className="text-primary text-center bg-dark salto">

      <h1>¿Quienes Somos?</h1>
      <p className="text-secondary">
        Somos una Pizzeria inspirada en la cocina de MERN Ramsay, contamos
        actualmente con un local con aforo para 80 personas ubicado en{" "}
        <div className="text-light">Av. Suecia #1234, Providencia.</div>Y si
        deseas probar nuestras Pizzas desde la comodidad de tu casa, tambien
        contamos con un servicio{" "}
        <Link className="text-light" to="/order">
          delivery.
        </Link>
        <br />
        Ante cualquier pregunta no dudes en contactarnos via redes sociales
      </p>
      <div>
        <a
          className="text-light"
          href="https://api.whatsapp.com/send?phone=56999056122&text=Hola%20quiero%20hacer%20un%20pedido"
        >
          <FaWhatsapp fontSize={27} className="mx-3" />
        </a>
        <a className="text-light" href="https://www.facebook.com/">
          <FaFacebookF fontSize={27} className="mx-3" />
        </a>
        <a className="text-light" href="https://www.instagram.com/">
          <FaInstagram fontSize={27} className="mx-3" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
