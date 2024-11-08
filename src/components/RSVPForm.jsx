import calendar from "../images/icono-calendar.svg"
import dresscode from "../images/icono-dresscode.svg"

const RSVPForm = () => {

  const handleOnClick = () => {
    window.open("https://forms.gle/MApWvWyLZpWw8BwQ8", "_blank");
  };

  const handleAddToCalendar = () => {
    const eventTitle = "Casamiento Pilar y Alan";
    const eventStart = "2025-01-31T19:00:00"; // Reemplazar con la fecha y hora de tu evento
    const eventEnd = "2025-02-01T06:00:00"; // Reemplazar con la hora de finalización
    const eventLocation = "Espacio Tigre"; // Reemplazar con la ubicación
    const eventDescription = "¡No te olvides de confirmar tu asistencia!";

    const icsContent = `
      BEGIN:VCALENDAR
      VERSION:2.0
      PRODID:-//Pilar y Alan//NONSGML v1.0//EN
      BEGIN:VEVENT
      SUMMARY:${eventTitle}
      DTSTART:${eventStart.replace(/[-:]/g, "")}
      DTEND:${eventEnd.replace(/[-:]/g, "")}
      LOCATION:${eventLocation}
      DESCRIPTION:${eventDescription}
      END:VEVENT
      END:VCALENDAR
      `.trim();

    // Crear un Blob y generar una URL para descargar el archivo
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${eventTitle}.ics`;
    link.click();
  };

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
      <h4>Agendá tu fecha en el calendario</h4>
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
