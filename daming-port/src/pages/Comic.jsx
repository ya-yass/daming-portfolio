import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"

const Comic = () => {
  return (
    <>
      <Box component='div' className='body'>
        <Sidebar/>
        Mini Comic works!
      </Box>
    </>
  )
}

export default Comic