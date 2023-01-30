import { Routes, useLocation, Route } from "react-router";
import Main from "./main/Main";
import About from "./about/About";
import Projects from "./projects/Projects";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = ( { width } ) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main width={width} />} />
        <Route path="/about" element={<About width={width}/>} />
        <Route path="/projects" element={<Projects width={width} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
