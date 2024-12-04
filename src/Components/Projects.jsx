import { useNavigate } from "react-router-dom";

import { PROJECTS } from "../constants";
import Cards from "./Cards";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div id="projects">
      <h2
        
        className="my-20 text-center text-4xl"
      >
        Projets
      </h2>
      <div
        
        className="flex flex-wrap justify-evenly py-8"
      >
        {PROJECTS.map((project, index) => (
          <div
            
            key={index}
            // Ajout du clic avec l'id du projet
            onClick={() => handleProjectClick(project.id)}
            className="cursor-pointer"
          >
            <Cards
              image={project.image}
              title={project.title}
              subtitle={project.description}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
