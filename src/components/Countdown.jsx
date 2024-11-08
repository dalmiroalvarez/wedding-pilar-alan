import React, { useState, useEffect } from 'react';
import anillos from "../images/icono-nuestraboda.svg";

const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-01-31T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-timers">
        <div className="timer-container">
          <div className="countdown-circle">
            <div>{time.days}<br/>Días</div>
          </div>
          <div className="countdown-circle">
            <div>{time.hours}<br/>Horas</div>
          </div>
          <div className="countdown-circle">
            <div>{time.minutes}<br/>Minutos</div>
          </div>
          <div className="countdown-circle">
            <div>{time.seconds}<br/>Segundos</div>
          </div>
        </div>
        <img src={anillos} className="countdown-image" alt="anillos" />
        <h4>Nuestra Boda</h4>
      </div>
    </div>
  );
};

export default CountdownTimer;