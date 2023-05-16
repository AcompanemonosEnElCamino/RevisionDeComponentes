import React, { useState, useEffect } from 'react';
import './FondoVerde.css'; 

const FondoVerde = () => {
    const [key, setKey] = useState(Math.random());

    useEffect(() => {
        const handleResetAnimation = () => {
            setKey(Math.random()); // Esto fuerza el re-renderizado del componente
        }

        window.addEventListener('click', handleResetAnimation);
        
        return () => {
            window.removeEventListener('click', handleResetAnimation);
        }
    }, []);

    return (
        <div className="fondo-verde d-flex flex-column justify-content-center align-items-center" key={key}>
            <h1 className="text-center text-light display-4">
                <span className="quote">“</span>No hay distancia en el camino hacia la sanación.<span className="quote">”</span> 
            </h1>
            <h2 className='text-center text-light display-4 my-4'>¡Prueba el Servicio Online!</h2>
            <img src="./img/onlineservicefiltroverde.png" alt="Fondo" />
        </div>
    );
}

export default FondoVerde;
