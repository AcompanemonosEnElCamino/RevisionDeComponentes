  import React, { useState } from 'react';
  import CarouselPanel from './CarouselPanel';
  import Modal from './Modal';
  
  // Este es el componente principal que maneja la lógica del carrusel y el modal
  const MyComponent = () => {
    // Estado para el panel actual y el estado del modal
    const [currentPanel, setCurrentPanel] = useState(0);
    const [showModal, setShowModal] = useState(false);
  
    // Definición de los paneles
    const panels = [ 
      {
          backgroundImage: '/img/nubes1op50.png',
          centralImage: '/img/ñeroGfa.jpg',
          name: 'LAURA ELENA AGUILAR VERA',
          title: 'PSICOLOGA, LIFE-COACH, CAPELLANA',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.',
          longParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ante odio. Sed id mi sit amet magna tincidunt aliquet. Donec at risus metus. Vestibulum aliquet purus sollicitudin cursus tristique. Pellentesque sagittis urna eu nibh ullamcorper, ac pharetra eros fermentum.'
      },
      {
        backgroundImage: '/img/nubes2op50.png',
        centralImage: '/img/ÑeroSister.jpg',
        name: 'AMADA LAURA ELENA CIPRES AGUILAR',
        title: 'TITULO DOS',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.',
        longParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ante odio. Sed id mi sit amet magna tincidunt aliquet. Donec at risus metus. Vestibulum aliquet purus sollicitudin cursus tristique. Pellentesque sagittis urna eu nibh ullamcorper, ac pharetra eros fermentum.'
      },
      {
        backgroundImage: '/img/nubes3op50.png',
        centralImage: '/img/pajara.jpg',
        name: 'ERNESTO VEGA ALIAS LA PAJARITA',
        title: 'Psicologo',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.',
        longParagraph: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, sem vitae aliquam ultrices, lacus lacus mollis nunc, sed varius augue mauris vel arcu. Nullam id luctus risus. Pellentesque vestibulum leo sit amet mi cursus, sed viverra diam tristique. In gravida, est a tincidunt condimentum, sem nulla fermentum ante, a consectetur risus lorem non magna. Proin suscipit, sem a interdum lacinia, tellus massa cursus libero, ut malesuada justo mi ac risus. Fusce venenatis felis non neque fringilla, a tincidunt orci aliquet. Vivamus vehicula metus ac lacus suscipit, in consequat erat porta. Morbi in neque quis mi facilisis aliquet. Donec ultrices, diam id aliquam congue, odio est iaculis nisl, at mollis est diam in magna'
      },
    ];
  
    // Manejador de eventos de click en la flecha
    const handleArrowClick = (direction) => {
      setCurrentPanel((currentPanel + direction + panels.length) % panels.length);
    };
  
    return (
      <div className="container-fluid">
        <CarouselPanel
          panel={panels[currentPanel]}
          onArrowClick={handleArrowClick}
          onButtonClick={() => setShowModal(true)}
        />
        {showModal && (
          <Modal panel={panels[currentPanel]} onClose={() => setShowModal(false)} />
        )}
      </div>
    );
  };
  
  export default MyComponent;
  
