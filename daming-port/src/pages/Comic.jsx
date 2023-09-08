import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"
import ComicComp from '../components/ComicComp';
import Navbar from '../components/Navbar'

const Comic = () => {
  return (
    <>
    <Navbar/>
      <Box component='div' className='body'>
        <Sidebar/>
        <ComicComp/>
      </Box>
    </>
  )
}

export default Comic