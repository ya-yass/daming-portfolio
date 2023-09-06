import { Route, Routes } from 'react-router-dom'
import Illustrations from './pages/Illustrations'
import CharacterDesign from './pages/CharacterDesign'
import Comic from './pages/Comic'
import AboutMe from './pages/AboutMe'

const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Illustrations />} />
            <Route path="/character-design" element={<CharacterDesign />} />
            <Route path="/mini-comic" element={<Comic />} />
            <Route path="/about-me" element={<AboutMe />} />
        </Routes>
    )
}

export default Router