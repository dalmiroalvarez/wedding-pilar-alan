import React from 'react'

const Party = () => {

  const handleOnClick = () => {
    window.open("  https://forms.gle/MnJ6S7bYXDQXZSZg9", "_blank");
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