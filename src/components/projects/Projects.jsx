import { motion } from "framer-motion";
import "./projects.css";
import Project from "./Project";
import { projects } from "./projectsList.js"

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "-100vw", transition: { duration: 1 } }}
    >
      <div className="projectsContainer">
        <ul>
          {projects.map((project) => (
            <Project
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
