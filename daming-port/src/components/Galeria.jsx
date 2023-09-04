import React, { useState } from 'react';
import Lightbox from './Lightbox';

import art01 from './assets/img/art01.jpg';
import art02 from './assets/img/art02.png';
import art03 from './assets/img/art03.jpg';

function Galeria({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  return (
    <div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            onClick={() => openLightbox(index)}
            className="thumbnail"
          />,

          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 2}`}
            onClick={() => openLightbox(index)}
            className="thumbnail"
          />,

          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 3}`}
            onClick={() => openLightbox(index)}
            className="thumbnail"
          />
        ))}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default Galeria;
