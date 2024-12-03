import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Fonction de configuration des animations avec un délai
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const ProjectPage = () => {
  const { id } = useParams();
  const project = PROJECTS.find((proj) => proj.id === parseInt(id));
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  // Jouer l'animation une seule fois au chargement de la page
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname); // Supprime le hash de l'URL
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      console.log("Hash found and removed:", window.location.hash);
      window.history.replaceState(null, null, window.location.pathname); // Supprime le hash de l'URL
    }
  }, []);

  if (!project) {
    return (
      <div className="text-center text-red-500">
        <Navbar />
        Projet non trouvé.
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-orange-500">
      <div className="container mx-auto px-8">
        <Navbar />
        <div className="border-b border-neutral-900 py-12 lg:py-24 lg:mb-35">
          <button
            onClick={handleGoBack}
            className="text-white bg-orange-500 p-1.5 rounded-lg hover:to-orange-600 text-sm font-medium lg:mx-10 flex justify-center mx-auto mb-10"
          >
            &lt; Retour aux projets
          </button>
          <div className="container mx-auto px-8 flex flex-wrap items-center">
            {/* Partie texte */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col  lg:items-start">
                <motion.h1
                  variants={container(0)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="pb-6 text-6xl tracking-tight lg:mt-4 lg:text-8xl text-center lg:text-left"
                >
                  {project.title}
                </motion.h1>

                {/* Liste des technologies utilisées */}
                <motion.div
                  variants={container(0.5)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="mb-8 flex flex-wrap gap-2 justify-center lg:justify-start"
                >
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.h2
                  variants={container(1)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="text-3xl font-semibold text-orange-500 mb-4 text-left"
                >
                  Description
                </motion.h2>

                <motion.p
                  variants={container(1.5)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="mb-12 text-lg leading-relaxed text-neutral-400 text-left lg:text-left"
                >
                  {Array.isArray(project.cahierDesCharges) ? (
                    project.cahierDesCharges.map((part, index) =>
                      typeof part === "string" ? (
                        <span key={index}>{part}</span>
                      ) : (
                        <a
                          key={index}
                          href={part.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 underline"
                        >
                          {part.text}
                        </a>
                      )
                    )
                  ) : (
                    <span>{project.cahierDesCharges}</span>
                  )}
                </motion.p>

                {/* Problématiques rencontrées */}
                <motion.h2
                  variants={container(2)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="text-3xl font-semibold text-orange-500 mb-4 text-left"
                >
                  Problématiques rencontrées
                </motion.h2>

                <motion.p
                  variants={container(2.5)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="mb-12 text-lg leading-relaxed text-neutral-400 text-left lg:text-left"
                >
                  {project.issues}
                </motion.p>

                {/* Compétences acquises */}
                <motion.h2
                  variants={container(3)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="text-3xl font-semibold text-orange-500 mb-4 text-left"
                >
                  Compétences acquises
                </motion.h2>

                <motion.p
                  variants={container(3.5)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="mb-12 text-lg leading-relaxed text-neutral-400 text-left lg:text-left"
                >
                  {project.skills}
                </motion.p>
              </div>
            </div>

            {/* Partie image */}
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex flex-col items-center lg:items-center">
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="rounded-2xl"
                  src={project.image}
                  alt={project.title}
                />
                {/* Bouton voir le projet */}
                <motion.div
                  variants={container(4)}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  className="text-center flex justify-center mt-8"
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-10 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300 text-lg"
                  >
                    Voir le code
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
