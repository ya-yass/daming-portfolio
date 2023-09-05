//assets
import { Box } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './IllustraComp.scss'
import art01 from './assets/img/art01.jpg'
import art02 from './assets/img/art02.png'
import art03 from './assets/img/art03.jpg'


const IllustraComp = () => {
  return (
    <>
      <Box>
        <div>
          <h1 className='title'>Illustrations</h1>

          <ImageList variant="masonry" cols={3} gap={8} className="image-feed-box">

            {itemData.map((item) => (
              <a href={item.img} target="_blank" rel="noreferrer">           

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
              ))
            }

          </ImageList>
        </div>
      </Box>
    </>
  )
}

const itemData = [
  {
    img: art01,
    title: 'arte 1',
  },
  { 
    img: art02,
    title: 'arte 2',
  },
  {
    img: art03,
    title: 'arte 3'
  },
  {
    img: art01,
    title: 'arte 1',
  },
  { 
    img: art02,
    title: 'arte 2',
  },
  {
    img: art03,
    title: 'arte 3'
  },
  {
    img: art01,
    title: 'arte 1',
  },
  { 
    img: art02,
    title: 'arte 2',
  },
  {
    img: art03,
    title: 'arte 3'
  },
  {
    img: art01,
    title: 'arte 1',
  },
  { 
    img: art02,
    title: 'arte 2',
  },
  {
    img: art03,
    title: 'arte 3'
  },
]

/* <a href={item.img}>
  <ImageListItem>
      <img src={art01}  alt="Imagem 1"/>
  </ImageListItem>
</a> */



export default IllustraComp