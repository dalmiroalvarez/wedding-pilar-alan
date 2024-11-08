const CeremonyParty = () => {

  const handleOnClick = () => {
    window.open("https://maps.app.goo.gl/dmQ198gXrMoKX9549", "_blank");
  };

  return (
    <div id="ceremony" className="ceremony-party" style={{width: "100vw"}}>      
      <div className="event-details">
        <div className="event-section">
          <h3>Ceremonia y Festejo</h3>
          <p>31 de enero de 2025</p>
          <p>19:00 horas</p>
          <p>Espacio Tigre, Troncos del Talar, Tigre, Buenos Aires</p>
          <button className="button-lugar" style={{marginTop: "1em"}} onClick={handleOnClick}>Cómo Llegar</button>
        </div>
      </div>
    </div>
  );
};

export default CeremonyParty;
