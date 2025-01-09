import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PROJECTS, FILTERS } from "../constants";
import Cards from "./Cards";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3); // Nombre de projets visibles

  // Récupérer toutes les technologies uniques des projets
  const technologies = [
    "All",
    ...new Set(PROJECTS.flatMap((project) => project.technologies)),
  ];

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  // Filtrer les projets par technologie sélectionnée
  const filteredProjects =
    selectedTechnology === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.technologies.includes(selectedTechnology)
        );

  // Fonction pour afficher plus de projets
  const showMoreProjects = () => {
    setVisibleProjectsCount((prevCount) => prevCount + 3); // Affiche 3 projets supplémentaires
  };

  return (
    <div id="projects">
      <h2 className="my-20 text-center text-4xl">Projets</h2>

      {/* Filtres par technologies */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {FILTERS.map((tech, index) => (
          <button
            key={index}
            onClick={() => setSelectedTechnology(tech)}
            className={`mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium ${
              selectedTechnology === tech
                ? "bg-orange-500 text-white"
                : "text-orange-500"
            } hover:bg-orange-500 hover:text-white`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Liste des projets */}
      <div className="flex flex-wrap justify-evenly py-8">
        {filteredProjects
          .slice(0, visibleProjectsCount)
          .map((project, index) => (
            <div
              key={index}
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

      {/* Bouton "Afficher plus" */}
      {filteredProjects.length > visibleProjectsCount && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="rounded bg-orange-500 px-4 py-2 text-white font-medium hover:bg-orange-400"
          >
            Afficher plus
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
