//assets
import { Box } from "@mui/material"
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Grid from '@mui/material/Grid';
// import Lightbox from "./Lightbox";

import './IllustraComp.scss'

import Galeria from './Galeria';
import art01 from './assets/img/art01.jpg'
import art02 from './assets/img/art02.png'
import art03 from './assets/img/art03.jpg'

const imagens = [
  art01,
  art02,
  art03,
  // Adicione mais URLs de imagens conforme necessário
];

const IllustraComp = () => {
  return (
    <>
      <Box>
        <div>
          <h1 className='title'>Illustrations</h1>

          {/* <Lightbox imageUrl= {Lightbox.art01} altText="Descrição da imagem" />
          <Lightbox imageUrl= {Lightbox.art02} altText="Descrição da imagem" />
          <Lightbox imageUrl= {Lightbox.art03} altText="Descrição da imagem" /> */}


          <Galeria images={imagens} />


          {/* 
          <ImageList variant="masonry" cols={3} gap={7} component= "Grid" className="big-feed">
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=460&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=460&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  className="feed-image"
                />
              </ImageListItem>
            ))}
          </ImageList> */}
        </div>
      </Box>
    </>
  )
}

/*
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];*/

export default IllustraComp