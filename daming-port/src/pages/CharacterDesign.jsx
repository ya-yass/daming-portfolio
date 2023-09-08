import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"
import CharacterDesignComp from '../components/CharacterDesignComp';
import Navbar from '../components/Navbar'

const CharacterDesign = () => {
  return (
    <>
      <Navbar/>
      <Box component='div' className='body'>
        <Sidebar/>
        <CharacterDesignComp/>
      </Box>
    </>
  )
}

export default CharacterDesign