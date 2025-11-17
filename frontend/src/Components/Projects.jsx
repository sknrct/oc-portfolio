import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  // 🔹 Fetch des projets depuis Django
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Erreur fetch projets :", err));
  }, []);

  // Récupérer toutes les technologies uniques des projets pour le filtrage
  const technologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies || [])),
  ];

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  // Filtrer les projets par technologie sélectionnée
  const filteredProjects =
    selectedTechnology === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies?.includes(selectedTechnology)
        );

  // Fonction pour afficher plus de projets
  const showMoreProjects = () => {
    setVisibleProjectsCount((prevCount) => prevCount + 3);
  };

  return (
    <div id="projects" className="py-12">
      <h2 className="my-20 text-center text-4xl">Projets</h2>

      {/* 🔹 Filtres par technologies */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {technologies.map((tech, index) => (
          <button
            key={index}
            onClick={() => setSelectedTechnology(tech)}
            className={`mr-2 mt-4 rounded px-2 py-1 text-sm font-medium ${
              selectedTechnology === tech
                ? "bg-orange-500 text-white"
                : "bg-neutral-900 text-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* 🔹 Liste des projets */}
      <div className="flex flex-wrap justify-evenly py-8 gap-6">
        {filteredProjects.slice(0, visibleProjectsCount).map((project) => {
          console.log(project.image, typeof project.image)
          console.log("Projets filtrés :", filteredProjects);

          return (
            <div
              key={project.id}
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
          );
        })}
      </div>

      {/* 🔹 Bouton "Afficher plus" */}
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
