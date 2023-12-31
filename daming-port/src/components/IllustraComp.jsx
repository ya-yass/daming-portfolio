//assets
import { Box } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// files
import './IllustraComp.scss'
import './DefaultComp.scss'

// high-quality
// import art01 from './assets/img/art01.jpg'
// import art02 from './assets/img/art02.png'
// import art03 from './assets/img/art03.jpg'
// import art04 from './assets/img/art04.png'
// import art05 from './assets/img/art05.jpg'
// import art06 from './assets/img/art06.jpg'
// import art07 from './assets/img/art07.jpg'
// import art08 from './assets/img/art08.jpg'
// import art09 from './assets/img/art09.jpg'
// import art10 from './assets/img/art10.jpg'
// import art11 from './assets/img/art11.jpg'
// import art12 from './assets/img/art12.jpg'
// import art13 from './assets/img/art13.jpg'

// low-quality
import art1 from './assets/img/low-quality/art1.jpeg'
import art2 from './assets/img/low-quality/art2.jpeg'
import art3 from './assets/img/low-quality/art3.jpeg'
import art4 from './assets/img/low-quality/art4.jpeg'
import art5 from './assets/img/low-quality/art5.jpeg'
import art6 from './assets/img/low-quality/art6.jpeg'
import art7 from './assets/img/low-quality/art7.jpeg'
import art8 from './assets/img/low-quality/art8.jpeg'
import art9 from './assets/img/low-quality/art9.jpeg'
import art010 from './assets/img/low-quality/art10.jpeg'
import art011 from './assets/img/low-quality/art11.jpeg'
import art012 from './assets/img/low-quality/art12.jpeg'
import art013 from './assets/img/low-quality/art13.jpeg'


const IllustraComp = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (itemData) => {
    setSelectedImage(itemData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const itemData = [
    {
      img: art1,
      title: 'arte 1',
    },
    { 
      img: art2,
      title: 'arte 2',
    },
    {
      img: art5,
      title: 'arte 3'
    },
    {
      img: art4,
      title: 'arte 1',
    },
    { 
      img: art013,
      title: 'arte 2',
    },
    {
      img: art6,
      title: 'arte 3'
    },
    {
      img: art7,
      title: 'arte 1',
    },
    { 
      img: art8,
      title: 'arte 2',
    },
    {
      img: art9,
      title: 'arte 3'
    },
    {
      img: art010,
      title: 'arte 1',
    },
    { 
      img: art011,
      title: 'arte 2',
    },
    {
      img: art012,
      title: 'arte 3'
    },
    {
      img: art3,
      title: 'arte 3'
    },
  ]

  return (
    <Box>
      <h1 className='title'>Illustrations</h1>

      {/* big feed */}
      <ImageList variant="masonry" cols={3} gap={8} id="big-image-feed-box image-link">
        {itemData.map((item, index) => (
          <div className="img-component" key={index}>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={`Imagem ${index + 1}`}
                loading="lazy"
                className="image-feed"
                onClick={() => openModal(item.img)}
              />
            </ImageListItem>
          </div>
        ))}
      </ImageList>

      {/* small feed */}
      <ImageList variant="masonry" cols={2} gap={7} id="sm-image-feed-box image-link">
        {itemData.map((item) => (
          <div className="img-component"> 
            <a key={item.img} href={item.img} target="_blank" rel="noreferrer" className="img-link">           
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  className="image-feed"
                />
              </ImageListItem>
            </a>
          </div>
          ))
        }
      </ImageList>

      {/* modal/lightbox */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Visualização de Imagem"
        className="lightbox"
      >
        {selectedImage && (
          <div className="enfeite">
            <div className="lightbox-div">
              <div className="lightbox-img-div">
                <img src={selectedImage} alt="Daming's art" />
                <button className="close" onClick={closeModal}> <CloseRoundedIcon/> </button>
              </div>
            </div>
          </div>
          
        )}
      </Modal>

    </Box>
  )
}

/* <a href={item.img}>
  <ImageListItem>
      <img src={art01}  alt="Imagem 1"/>
  </ImageListItem>
</a> */



export default IllustraComp