// assets
import * as React from 'react';
import { Box, Drawer, Button, List} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Tooltip from '@mui/material/Tooltip';

// files
import './Navbar.scss';
import profileIcon from "./assets/img/profileIcon.jpeg";
import kofi from './assets/img/kofi.png';
import instagram from './assets/img/instagram.png';
import twitter from './assets/img/twitter.png';

const Navbar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="sidenav-bar"
      >
      <List>
        <div className="links">
          <NavLink to="/" activeClassName="active" disablePadding >Illustrations</NavLink>
          <NavLink to="/character-design" >Character Design</NavLink>
          <NavLink to="/mini-comic" activeClassName="active">Mini Comic</NavLink>
          <NavLink to="/about-me" activeClassName="active" className="about-link">About me</NavLink>
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
      </List>
    </Box>
  );

  return (
    <div className='drawer-navbar'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <img src={profileIcon} alt="Daming's profile pic" className='profile-pic' />
          <Button onClick={toggleDrawer(anchor, true)} className='hamburguer'> <MenuRoundedIcon /> </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Navbar