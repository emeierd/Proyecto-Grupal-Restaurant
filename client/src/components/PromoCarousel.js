import { useState } from "react";
import { Carousel } from "react-bootstrap";
import images from "../constants/images";

const PromoCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.carousel1}
          alt="First slide"
        />
        <Carousel.Caption className="text-light">
          <h3>¿No quieres salir de tu casa?</h3>
          <p>Estamos disponibles en todas las aplicaciones de delivery.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.carousel2}
          alt="Second slide"
        />
        <Carousel.Caption className="text-info">
          <h3>Menú completo</h3>
          <p>Entre las 14 y 00 horas. Pizza por corte a partir de medianoche.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.carousel3}
          alt="Third slide"
        />
        <Carousel.Caption className="text-info">
          <h3>After Office</h3>
          <p>Lunes a Jueves desde las 18 horas, Viernes desde las 16 horas.</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>;
};

export default PromoCarousel;
