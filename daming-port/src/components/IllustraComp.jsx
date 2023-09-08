//assets
import { Box } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// files
import './IllustraComp.scss'
import './DefaultComp.scss'
import art01 from './assets/img/art01.jpg'
import art02 from './assets/img/art02.png'
import art03 from './assets/img/art03.jpg'
import art04 from './assets/img/art04.png'
import art05 from './assets/img/art05.jpg'
import art06 from './assets/img/art06.jpg'
import art07 from './assets/img/art07.jpg'
import art08 from './assets/img/art08.jpg'
import art09 from './assets/img/art09.jpg'
import art10 from './assets/img/art10.jpg'
import art11 from './assets/img/art11.jpg'
import art12 from './assets/img/art12.jpg'
import art13 from './assets/img/art13.jpg'


const IllustraComp = () => {
  return (
    <Box>
      <h1 className='title'>Illustrations</h1>
      <ImageList variant="masonry" cols={3} gap={8} id="big-image-feed-box">
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

      <ImageList variant="masonry" cols={2} gap={7} id="sm-image-feed-box">
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
    </Box>
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
    img: art05,
    title: 'arte 3'
  },
  {
    img: art04,
    title: 'arte 1',
  },
  { 
    img: art13,
    title: 'arte 2',
  },
  {
    img: art06,
    title: 'arte 3'
  },
  {
    img: art07,
    title: 'arte 1',
  },
  { 
    img: art08,
    title: 'arte 2',
  },
  {
    img: art09,
    title: 'arte 3'
  },
  {
    img: art10,
    title: 'arte 1',
  },
  { 
    img: art11,
    title: 'arte 2',
  },
  {
    img: art12,
    title: 'arte 3'
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