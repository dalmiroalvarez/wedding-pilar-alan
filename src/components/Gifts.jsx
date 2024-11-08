import { useState } from "react";
import regalo from "../images/icono-regalo.svg";

const Carousel = () => {
  // Estado para alternar entre ver más y ver menos
  const [showDetails, setShowDetails] = useState(false);

  // Función para manejar el clic en el botón
  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ justifyContent: "end" }}>
        <div className="carousel-item active">
          <div 
            className="d-none d-md-block"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1em" }}
          >
            <img
              src={regalo}
            />
            
            {showDetails ? (
              // Contenido detallado
              <>
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
                  <h4 className="carousel-bank-title">Cuenta en Dólares</h4>
                  <p className="carousel-bank-text">Alias: CASORIO.ALAN.PILI</p>
                  <p className="carousel-bank-text">Banco: Galicia</p>
                  <p className="carousel-bank-text">Cuenta: 400510813826</p>
                  <p className="carousel-bank-text">CBU: 0070382431004005108167</p>
                  <p className="carousel-bank-text">Nombre: Alan Carlos Poledo Romero</p>
                  <p className="carousel-bank-text">C.U.I.L.: 20-35367341-7</p>
                </div>  
              </div>
              </>
            ) : (
              // Mensaje inicial
              <p className="carousel-gifts">¡El mejor regalo es tu presencia! Si deseas realizarnos un regalo...</p>
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

export default Carousel;
