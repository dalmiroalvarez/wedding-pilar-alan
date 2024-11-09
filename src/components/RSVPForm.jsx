import calendar from "../images/icono-calendar.svg"
import dresscode from "../images/icono-dresscode.svg"

const RSVPForm = () => {

  const handleOnClick = () => {
    window.open("https://forms.gle/MApWvWyLZpWw8BwQ8", "_blank");
  };
  

  const handleAddToCalendar = () => {
    // Configura los detalles del evento
    const eventDetails = {
      title: 'Casamiento Pili y Alan',
      start: new Date('2025-01-31T19:00:00'),
      end: new Date('2025-02-01T05:00:00'),
      location: 'Espacio Tigre',
      description: '¡Te esperamos para festejar!'
    };
  
    // Crea el enlace de Google Calendar
    const googleCalendarUrl = createGoogleCalendarLink(eventDetails);
  
    // Abre el enlace en una nueva pestaña
    window.open(googleCalendarUrl, '_blank');
  };
  
  function createGoogleCalendarLink(eventDetails) {
    const { title, start, end, location, description } = eventDetails;
  
    // Formatea las fechas en el formato requerido por Google Calendar
    const startDate = start.toISOString().replace(/[-:]|\.\d+/g, '');
    const endDate = end.toISOString().replace(/[-:]|\.\d+/g, '');
  
    // Construye el enlace de Google Calendar
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
  }

  return (
    <div id="rsvp" className="rsvp" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2>RSVP</h2>
      <h4>Esperamos que puedas acompañarnos</h4>
      <button 
        className='button-lugar' 
        onClick={handleOnClick}
        style={{marginTop: "1em"}}
      >
        Confirmá tu Asistencia
      </button>
      <img
        src={calendar}
        width={180}
        style={{marginTop: "1em"}}
      />
      <h4>Agendá la fecha en el calendario</h4>
      <button 
        className='button-lugar'
        style={{marginTop: "1em"}}
        onClick={handleAddToCalendar}
      >
        Agregar al Calendario
      </button>
      <img
        src={dresscode}
        width={180}
      />
      <h2>DRESS CODE:</h2>
      <h4>Formal elegante</h4>
    </div>
  );
};

export default RSVPForm;
