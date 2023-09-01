import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"
import CharacterDesignComp from '../components/CharacterDesignComp';

const CharacterDesign = () => {
  return (
    <>
      <Box component='div' className='body'>
        <Sidebar/>
        <CharacterDesignComp/>
      </Box>
    </>
  )
}

export default CharacterDesign