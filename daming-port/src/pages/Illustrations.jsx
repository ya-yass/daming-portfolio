//assets
import * as React from 'react';
import Box from '@mui/material/Box';

import './Default.scss'

//components
import Sidebar from "../components/Sidebar"
import IllustraComp from '../components/IllustraComp'

const Illustrations = () => {
  return (
    <>
      <Box className="body">
        <Sidebar/>
        <IllustraComp />
      </Box>
    </>
  )
}

export default Illustrations