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
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projets
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-wrap justify-evenly py-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            variants={itemVariants}
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
              link="#"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
//     <div className="border-b border-neutral-900 pb-4">
//       <motion.h2
//       whileInView={{opacity: 1, y: 0}}
//       initial={{ opacity: 0, y: -100}}
//       transition={{duration: 0.5}}
//       className="my-20 text-center text-4xl">Projets</motion.h2>
//       <div>
//         <div>
//           {PROJECTS.map((project, index) => (
//             <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//               <motion.div
//               whileInView={{opacity: 1, x: 0}}
//               initial={{ opacity: 0, x: -100}}
//               transition={{duration: 1}}
//               className="w-full lg:w-1/4">
//                 <img className="mb-6 rounded" src={project.image} width={150} height={150} alt={project.title} />
//               </motion.div>
//               <motion.div
//               whileInView={{opacity: 1, x: 0}}
//               initial={{ opacity: 0, x: 100}}
//               transition={{duration: 1}}
//               className="w-full max-w-xl lg:w-3/4">
//                 <h6 className="mb-2 font-semibold">{project.title}</h6>
//                 <p className="mb-4 to-neutral-400">{project.description}</p>
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1
//                         text-sm font-medium text-purple-800"
//                     key={index}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Projects;
