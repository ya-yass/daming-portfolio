import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Illustrations from './pages/Illustrations'
import CharacterDesign from './pages/CharacterDesign'
import Comic from './pages/Comic'

const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Illustrations />} />
            <Route path="/character-design" element={<CharacterDesign />} />
            <Route path="/mini-comic" element={<Comic />} />
        </Routes>
    )
}

export default Router