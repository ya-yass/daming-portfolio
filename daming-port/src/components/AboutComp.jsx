// assets
import { Box } from "@mui/material"
import { Link } from 'react-router-dom';

// files
import './AboutComp.scss';
import Profile from './assets/img/profilePic2.jpeg'

const AboutComp = () => {
  return (
    <Box className="body-body">
      <div className="content-content">
        <h1 className='title'>About me</h1>
        <div className="container-content">
          <img src={Profile} alt="" className="profile-pic" />
          <div className="text-content">
            <div className="header">
              <h3>Daming</h3>
              <p className="details">20 yo  •  Brazilian  •  Digital illustrator</p>
            </div>

            <div className="body-content">
              <p>Hello there! I’m Daming.</p>
              <p>Based on Brazil, i’m an artist who are 20 years old, now studying art by myself while learn more about different technologies. I make semi-realist digital art and soon pretend to make 2D animations.</p>
              <p>For commission’s info, price and terms, contact me on ddamingg@gmail.com.</p>

              <div className="footer-content">
                <a href="mailto:seu-email@example.com">Commission me</a>
                <Link to="/" >Illustrations</Link>
                <Link to="/character-design" >Character Desing</Link>
                <Link to="/mini-comic" >Mini Comics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Box>
  )
}

export default AboutComp