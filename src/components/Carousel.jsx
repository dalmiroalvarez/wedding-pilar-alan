import React, { useEffect, useRef, useState } from "react";
import corazon from "../images/icono-frase.svg";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // El 10% del elemento debe ser visible para activar la animación
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${isVisible ? "animate" : ""}`}
      data-bs-ride="carousel"
      ref={carouselRef}
    >
      <div className="carousel-inner" style={{ justifyContent: "end" }}>
        <div className="carousel-item active">
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <img src={corazon} width={150} style={{ marginBottom: "20px" }} />
            <h4>LLEGÓ EL GRAN DÍA</h4>
            <p>"Somos una casualidad llena de intención"</p>
            <p><i>Mario Benedetti</i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
