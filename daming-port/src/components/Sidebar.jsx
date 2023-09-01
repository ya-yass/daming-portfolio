//assets
import { Box } from "@mui/material"
import { Link } from 'react-router-dom'
// import { TreeView, TreeItem } from '@mui/lab';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//files
import profileIcon from "./assets/img/profileIcon.jpeg"

import './Sidebar.scss'


const Sidebar = () => {
  return (
    <Box component={Sidebar}>
      <div className="content">
        <img className="profile-icon" src={profileIcon} alt="Daming's profile icon" />

        <div className="links">
        {/* <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
          <TreeItem nodeId="1" label="Illustrations">
            <Link to="/illustrations" className="illustrations-link">Illustrations</Link>
          </TreeItem>
        </TreeView> */}
          <Link to="/illustrations" className="illustrations-link">Illustrations</Link>
          <Link to="/character-design" className="character-link">Character Design</Link>
          <Link to="/mini-comic" className="comic-link">Mini Comic</Link>
        </div> 

      </div>
    </Box>
  )
}

export default Sidebar