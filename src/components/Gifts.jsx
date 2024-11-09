import React, { useState, useEffect, useRef } from "react";
import regalo from "../images/icono-regalo.svg";

const Gifts = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // El 10% del elemento debe estar visible para activar la animación
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

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

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
            className="d-md-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <img src={regalo} />

            {showDetails ? (
              <div className="gifts-container">
                <div>
                  <h4 className="carousel-bank-title">Cuenta en Pesos</h4>
                  <p className="carousel-bank-text">Alias: PILAR.RAMPOLDI</p>
                  <p className="carousel-bank-text">Banco: ICBC</p>
                  <p className="carousel-bank-text">Cuenta: 0542/01131290/19</p>
                  <p className="carousel-bank-text">CBU: 0150542901000131290195</p>
                  <p className="carousel-bank-text">Nombre: Maria del Pilar Alvarez Rampoldi</p>
                  <p className="carousel-bank-text">C.U.I.L.: 27-38359134-7</p>
                </div>
                <div>
                  <h4 className="carousel-bank-title-usd">Cuenta en Dólares</h4>
                  <p className="carousel-bank-text">Alias: CASORIO.ALAN.PILI</p>
                  <p className="carousel-bank-text">Banco: Galicia</p>
                  <p className="carousel-bank-text">Cuenta: 400510813826</p>
                  <p className="carousel-bank-text">CBU: 0070382431004005108167</p>
                  <p className="carousel-bank-text">Nombre: Alan Carlos Poledo Romero</p>
                  <p className="carousel-bank-text">C.U.I.L.: 20-35367341-7</p>
                </div>
              </div>
            ) : (
              <p className="carousel-gifts">¡El mejor regalo es tu presencia!<br/> Si deseas realizarnos un regalo...</p>
            )}

            <button
              className="button-lugar"
              style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              onClick={toggleDetails}
            >
              {showDetails ? "Ver Menos" : "Ver Más"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
