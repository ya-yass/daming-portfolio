import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"
import ComicComp from '../components/ComicComp';

const Comic = () => {
  return (
    <>
      <Box component='div' className='body'>
        <Sidebar/>
        <ComicComp/>
      </Box>
    </>
  )
}

export default Comic