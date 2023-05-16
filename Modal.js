import React from 'react';
import './Modal.css';

const Modal = ({ panel, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="modal-img" src={panel.centralImage} alt="Imagen central" /> {/* Agrega una clase a la imagen para poder controlar su tamaño */}
        <h2>{panel.name}</h2> {/* Muestra el nombre del panel, ahora debajo de la imagen */}
        <p>{panel.longParagraph}</p> {/* Muestra el párrafo largo del panel */}
        <button className="close-button" onClick={onClose}> {/* Mover el botón de cerrar al final del contenido */}
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
