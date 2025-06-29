import casamiento1 from "../images/casamiento1.jpg"
import casamiento2 from "../images/casamiento2.jpg"
import casamiento3 from "../images/casamiento3.jpg"
import casamiento4 from "../images/casamiento4.jpg"
import casamiento5 from "../images/casamiento5.jpg"

const Gallery = () => {
  return (
    <section id="gallery" className="gallery" style={{marginBottom: "1em"}}>
      <h2 style={{marginTop: "1em"}}>Nosotros <br/>♥</h2>
      <div className="gallery-grid gallery-item" style={{marginBottom: "1em"}}>
        <img
          src={casamiento1}
        />
        <img
          src={casamiento2}
        />
        <img
          src={casamiento3}
        />
        <img
          src={casamiento4}
        />
      </div>
    </section>
  );
};

export default Gallery;
