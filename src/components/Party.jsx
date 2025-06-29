import React from 'react'

const Party = () => {

  const handleOnClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSecdHfcY4Ut9mrcn6xfN-fn_gNz9W5S21Mp8GML4mG9P1jNRQ/viewform?usp=sharing&ouid=112190543209944920506", "_blank");
  };


  return (
    <div className='party-container' style={{marginTop: "2em"}}>
        <h4 className='party'>¡Fiesta!</h4>
        <p className='party-text'>¿Qué canciones no pueden faltar en la fiesta?</p>
        <p className='party-text'>¡Queremos crear una lista inolvidable!</p>
        <button className="button-party" style={{marginTop: "1em"}} onClick={handleOnClick}>Sugerir Canción</button>
        
    </div>
  )
}

export default Party