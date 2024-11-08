import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Retraso para la imagen de fondo
    const navbar = document.querySelector(".navbar");
    setTimeout(() => {
      if (navbar) {
        navbar.style.backgroundImage = "url('https://agendalafecha.com/invitaciones/vintage/assets/img/canciones.jpg')";
      }
    }, 0); 

    // Retraso de 200 ms para mostrar el logo con transición
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 300);

    // Limpiar el timeout cuando el componente se desmonta
    return () => clearTimeout(logoTimeout);
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className={`logo ${showLogo ? "visible" : ""}`} />
    </div>
  );
};

export default Navbar;
