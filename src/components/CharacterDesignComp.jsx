//assets
import { Box } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// files
import './DefaultComp.scss'
import art14 from './assets/img/art14.jpg'
import art15 from './assets/img/art15.jpg'
import art16 from './assets/img/art16.jpg'
import art17 from './assets/img/art17.jpg'
import art18 from './assets/img/art18.jpg'
import art19 from './assets/img/art19.jpg'
import art20 from './assets/img/art20.png'

const CharacterDesignComp = () => {
  return (
    <Box>
      <h1 className='title'>Character Design</h1>
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
    img: art14,
    title: 'arte 1',
  },
  { 
    img: art15,
    title: 'arte 2',
  },
  {
    img: art16,
    title: 'arte 3'
  },
  {
    img: art17,
    title: 'arte 1',
  },
  { 
    img: art18,
    title: 'arte 2',
  },
  {
    img: art19,
    title: 'arte 3'
  },
  {
    img: art20,
    title: 'arte 1',
  },
]

export default CharacterDesignComp