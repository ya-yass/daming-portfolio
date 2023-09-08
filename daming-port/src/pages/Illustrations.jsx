//assets
import * as React from 'react';
import Box from '@mui/material/Box';

//files
import Sidebar from "../components/Sidebar"
import IllustraComp from '../components/IllustraComp'
import Navbar from '../components/Navbar'
import './Default.scss'

const Illustrations = () => {
  return (
    <>
      <Navbar/>
      <Box className="body">
        <Sidebar/>
        <IllustraComp />
      </Box>
    </>
  )
}

export default Illustrations