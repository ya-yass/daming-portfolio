//assets
import { Box } from "@mui/material"
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import './DefaultComp.scss'


const ComicComp = () => {
  return (
    <Box>
      <h1 className='title'>Mini comics</h1>
      <p className="error">
        Oops, this page is a WIP
      </p>
      {/* <ImageList variant="masonry" cols={3} gap={8} id="big-image-feed-box">
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
      </ImageList> */}
    </Box>
  )
}

/*const itemData = [
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
]*/

export default ComicComp