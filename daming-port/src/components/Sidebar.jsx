//assets
import { Box } from "@mui/material"
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'
import Tooltip from '@mui/material/Tooltip';

//files
import profileIcon from "./assets/img/profileIcon.jpeg"
import kofi from './assets/img/kofi.png'
import instagram from './assets/img/instagram.png'
import twitter from './assets/img/twitter.png'

const Sidebar = () => {
  return (
    <Box className="sidenav">
      <div className="content">
        <img className="profile-icon" src={profileIcon} alt="Daming's profile icon" />

        <div className="links">
          <NavLink to="/" activeClassName="active" >Illustrations</NavLink>
          <NavLink to="/character-design" >Character Design</NavLink>
          <NavLink to="/mini-comic" activeClassName="active">Mini Comic</NavLink>
          <NavLink to="about-me" className="about-link">About me</NavLink>
        </div> 

        <div className="social">
          <Tooltip
            title="Kofi page"
            enterDelay={800}
            placement="top"
            disableInteractive
            >
            <a href="https://ko-fi.com/daming" target="_blank" rel="noreferrer">
              <img src={kofi} alt="X" className="social-media kofi"/>
            </a>
          </Tooltip>

          <Tooltip
            title="Instagram"
            enterDelay={800}
            placement="top"
            disableInteractive
            >
            <a href="https://www.instagram.com/da._ming/" alt="https://www.instagram.com/da._ming/" target="_blank" rel="noreferrer"> 
              <img src={instagram} alt="X" className="social-media instagram"/>
            </a>
          </Tooltip>

          <Tooltip
            title="Twitter"
            enterDelay={800}
            placement="top"
            disableInteractive
            > 
            <a href="https://twitter.com/da_mingg" alt="https://www.instagram.com/da._ming/" target="_blank" rel="noreferrer">
              <img src={twitter} alt="X" className="social-media twitter"/>
            </a>
          </Tooltip>
        </div>
      </div>
    </Box>
  )
}

export default Sidebar