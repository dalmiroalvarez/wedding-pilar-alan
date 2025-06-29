const CeremonyParty = () => {

  const handleCeremonyClick = () => {
    window.open("https://www.google.com/maps/place/Capilla+Santa+Teresita/@-34.4441339,-58.7556015,17.25z/data=!4m6!3m5!1s0x95bc9f4b493e711f:0xeef75eb43e5416c4!8m2!3d-34.444167!4d-58.7556356!16s%2Fg%2F1td_cwbt?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  const handlePartyClick = () => {
    window.open("https://www.google.com/maps/place/Barrio+Cerrado+Gal%C3%A1pagos/@-34.4369595,-58.7653622,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc9f39fc9874f9:0xdb51a246acaceeab!8m2!3d-34.4369595!4d-58.7653622!16s%2Fg%2F11fz9wxqdq?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <div id="ceremony" className="ceremony-party" style={{width: "100vw"}}>      
      <div className="event-details">
        <div className="event-section">
          <h3>Ceremonia</h3>
          <p>11 de octubre de 2025</p>
          <p>16:15</p>
          <p>Capilla Santa Teresita</p>
          <p>Gualeguaychú Golf Club S/N, B1667 Manuel Alberti, Provincia de Buenos Aires</p>
          <button className="button-lugar" style={{marginTop: "1em"}} onClick={handleCeremonyClick}>Cómo Llegar</button>
          <h3 style={{marginTop: "1em"}}>Festejo</h3>
          <p>11 de octubre de 2025</p>
          <p>18:00hs</p>
          <p>Sum barrio Galapagos</p>
          <p>Golf Club Corona 2542, B1664DUB Manuel Alberti, Provincia de Buenos Aires</p>
          <button className="button-lugar" style={{marginTop: "1em"}} onClick={handlePartyClick}>Cómo Llegar</button>
        </div>
      </div>
    </div>
  );
};

export default CeremonyParty;
