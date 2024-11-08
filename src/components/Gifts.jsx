import regalo from "../images/icono-regalo.svg"

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
              src={regalo}
              width={150}
              style={{marginBottom: "20px"}}
            />
            <p>¡El mejor regalo es tu presencia!
            Si deseas realizarnos un regalo...</p>
          <button className="button-lugar" style={{marginTop: "1em"}}>Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
