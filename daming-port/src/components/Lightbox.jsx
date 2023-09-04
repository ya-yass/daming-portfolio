import React, { useState } from 'react';

import art01 from './assets/img/art01.jpg'
import art02 from './assets/img/art02.png'
import art03 from './assets/img/art03.jpg'

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

export default Lightbox;