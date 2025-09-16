import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowLeft);

const ProjectPage = () => {
  const { id } = useParams();
  const project = PROJECTS.find((proj) => proj.id === parseInt(id));
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (window.location.hash) {
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
            className="p-1.5 rounded-lg text-m font-medium lg:mx-10 flex items-center justify-center mx-auto bg-neutral-900 text-orange-500"
          >
            <FontAwesomeIcon icon="arrow-left" className="mr-2 leading-none" />{" "}
            Retour aux projets
          </button>

          <div className="container mx-auto px-8 flex flex-wrap items-center">
            {/* Partie texte */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col  lg:items-start">
                <h1 className="pb-6 text-6xl tracking-tight lg:mt-4 lg:text-8xl text-center lg:text-left">
                  {project.title}
                </h1>

                {/* Liste des technologies utilisées */}
                <div className="mb-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <h2 className="text-3xl font-semibold text-orange-500 mb-4 text-left">
                  Description
                </h2>

                <p className="mb-12 text-lg leading-relaxed text-neutral-400 text-left lg:text-left">
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
                </p>

                {/* Compétences acquises */}
                <h2 className="text-3xl font-semibold text-orange-500 mb-4 text-left">
                  Compétences acquises
                </h2>

                <p className="mb-12 text-lg leading-relaxed text-neutral-400 text-left lg:text-left">
                  {project.skills}
                </p>
              </div>
            </div>

            {/* Partie image */}
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex flex-col items-center lg:items-center">
                <img
                  className="rounded-2xl"
                  src={project.image}
                  alt={project.title}
                />
                {/* Bouton voir le projet */}
                <div className="text-center flex justify-center mt-8">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-10 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300 text-lg"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
