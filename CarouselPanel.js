import React, { useState, useEffect } from 'react';
import './CarouselPanel.css';

// Componente para el recuadro estático
const StaticBox = () => {
  return (
    <div className="static-box">
      <img src="/img/star.png" alt="Icon" className="box-icon"/>
      <h5>Nuestros profesionales estrella</h5>
    </div>
  )
}

const CarouselPanel = ({ panel, onArrowClick, onButtonClick }) => {
  // Manejador de eventos de click en el botón y las flechas
  const handleClick = (event, value) => {
    event.stopPropagation();
    if(value === 0) onButtonClick(); // Si el valor es 0, es un botón
    else onArrowClick(value); // De lo contrario, es una flecha
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundImage: `url(${panel.backgroundImage})` }}
      onClick={() => onArrowClick(1)}
    >
      <StaticBox />
      <div className="arrow left" onClick={(e) => handleClick(e, -1)}>
        &lt;
      </div>
      <img
        src={panel.centralImage}
        alt="central left"
        className="central-left-image mt-6 mb-3 mb-md-0"
      />
      <div className="text-container mb-3 mb-md-0">
        <p className="name">{panel.name}</p>
        <h2 className="title">{panel.title}</h2>
        <p className="paragraph">{panel.paragraph}</p>
      </div>
      <button className="green-button mb-3 mb-md-0 align-self-center" onClick={(e) => handleClick(e, 0)}>
        Ver biografía
      </button>
      <div className="arrow right" onClick={(e) => handleClick(e, 1)}>
        &gt;
      </div>
    </div>
  );
}

export default CarouselPanel;