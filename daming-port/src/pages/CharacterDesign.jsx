import Box from '@mui/material/Box';
import './Default.scss'

//components
import Sidebar from "../components/Sidebar"

const CharacterDesign = () => {
  return (
    <>
      <Box component='div' className='body'>
        <Sidebar/>
        Character Design works!
      </Box>
    </>
  )
}

export default CharacterDesign