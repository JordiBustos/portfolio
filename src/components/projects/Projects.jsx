import { motion } from "framer-motion";
import "./projects.css";
import Project from "./Project";
import { projects } from "./projectsList.js";

const Projects = ({width}) => { 
  return (
    <motion.div
      className="projects"
      initial={{ width: 0 }}
      animate={{ width: width }}
      exit={{ x: "-100vw", transition: { duration: 1 } }}
      style={{width:width}}
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
