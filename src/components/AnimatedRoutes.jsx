import { Routes, useLocation, Route } from "react-router";
import Main from './main/Main';
import About from './about/About';
import Projects from './projects/Projects';
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation(); 
    
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    )   
}

export default AnimatedRoutes;