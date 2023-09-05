import React, { useEffect } from 'react';


// import art01 from './assets/img/art01.jpg'
// import art02 from './assets/img/art02.png'
// import art03 from './assets/img/art03.jpg'

import Glightbox from 'glightbox';
import './Lightbox.scss'; 

import art01 from './assets/img/art01.jpg'
import art02 from './assets/img/art02.png'
import art03 from './assets/img/art03.jpg'

function GaleriaLightbox() {
  
  useEffect(() => {
    const lightbox = Glightbox();

    // Adicione as imagens específicas aqui
    lightbox.open({
      href: {art01},
      type: 'image',
      title: 'Legenda da imagem 1',
    });

    lightbox.open({
      href: {art02},
      type: 'image',
      title: 'Legenda da imagem 2',
    });

    lightbox.open({
      href: {art03},
      type: 'image',
      title: 'Legenda da imagem 3',
    });
  }, []);

  return (
    <div>
      <a href={art01} data-glightbox="galeria">
      <img src={art01}  alt="Imagem 1" />
    </a>

    <a href={art02} data-glightbox="galeria">
      <img src={art02}  alt="Imagem 2" />
    </a>

    <a href={art03} data-glightbox="galeria">
      <img src={art03} alt="Imagem 3" />
    </a>
    </div>
  );
}

export default GaleriaLightbox;


/* 
function Lightbox({ imageUrl, altText }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img src={art01} alt="aa" onClick={openLightbox} />

      {isOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <img src={art01} alt="aa" />
            <button onClick={closeLightbox}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lightbox;*/
/* 
function Lightbox({ images, currentIndex, onClose }) {
  const currentImage = images[currentIndex];

  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <img src={currentImage} alt={`Imagem ${currentIndex + 1}`} />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Lightbox;*/
