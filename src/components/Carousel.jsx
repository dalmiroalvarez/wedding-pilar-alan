import corazon from "../images/icono-frase.svg"

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner " style={{justifyContent: "end"}}>
        <div className="carousel-item active">
          <div 
            className="carousel-caption d-none d-md-block"
            style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1em"}}
          >
            <img
              src={corazon}
              width={150}
              style={{marginBottom: "20px"}}
            />
            <h4>LLEGÓ EL GRAN DÍA</h4>
            <p>"Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
