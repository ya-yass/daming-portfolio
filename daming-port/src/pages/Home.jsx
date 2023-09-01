import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <>
      <Box component='container' className='body'>
        <Sidebar/>
        Home works!
      </Box>
    </>
  )
}

export default Home