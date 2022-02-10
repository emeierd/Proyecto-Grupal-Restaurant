import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="text-primary text-center">
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
      <div className="text-light">
        <FaWhatsapp fontSize={27} className="mx-3" />
        <FaFacebookF fontSize={27} className="mx-3" />
        <FaInstagram fontSize={27} className="mx-3" />
      </div>
    </div>
  );
};

export default AboutUs;
