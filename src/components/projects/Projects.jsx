import { motion } from "framer-motion";
import "./projects.css";
import Project from "./Project";
import { projects } from "./projectsList.js"
import { useRef } from "react";

const Projects = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let width;  
  if (windowSize.current[0] < 800 ) {
    width = "90%";
  } else if (windowSize.current[0] < 1300) {
    width = "65vw";
  } else if (windowSize.current[0] < 2000) {
    width = "50vw";
  }
  return (
    <motion.div
      className="projects"
      initial={{ width: 0 }}
      animate={{ width: width }}
      exit={{ x: "-100vw", transition: { duration: 1 } }}
    >
      <div className="projectsContainer">
        <ul>
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              accesibility={project.accesibility}
              date={project.date}
              language={project.language}
              link={project.link}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Projects;
