//assets
import { Box } from "@mui/material"
import { Link } from 'react-router-dom'
import './Sidebar.scss'
// import { TreeView, TreeItem } from '@mui/lab';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//files
import profileIcon from "./assets/img/profileIcon.jpeg"
import kofi from './assets/img/kofi.png'
import instagram from './assets/img/instagram.webp'
import twitter from './assets/img/twitter.png'

const Sidebar = () => {
  return (
    <Box className="sidenav">
      <div className="content">
        <img className="profile-icon" src={profileIcon} alt="Daming's profile icon" />

        <div className="links">
          <Link to="/" className="illustrations-link">Illustrations</Link>
          <Link to="/character-design" className="character-link">Character Design</Link>
          <Link to="/mini-comic" className="comic-link">Mini Comic</Link>
        </div> 

        <div className="social">
          <img src={kofi} alt="X" className="social-media kofi"/>
          <img src={instagram} alt="X" className="social-media instagram"/>
          <img src={twitter} alt="X" className="social-media teitter"/>
        </div>
        

      </div>
    </Box>
  )
}

export default Sidebar