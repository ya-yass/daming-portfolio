// assets
import * as React from 'react';
import { Box, Drawer, Button, List} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// files
import './Navbar.scss'

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
      <List className='links'>
          <NavLink to="/" activeClassName="active" disablePadding >Illustrations</NavLink>
          <NavLink to="/character-design" >Character Design</NavLink>
          <NavLink to="/mini-comic" activeClassName="active">Mini Comic</NavLink>
          <NavLink to="/about-me" activeClassName="active" className="about-link">About me</NavLink>
      </List>
    </Box>
  );

  return (
    <div className='drawer-navbar'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className='hamburguer'><MenuRoundedIcon /></Button>
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