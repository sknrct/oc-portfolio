import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import Navbar from "./Navbar";

const ProjectPage = () => {
  const { id } = useParams();
  const project = PROJECTS.find((proj) => proj.id === parseInt(id));

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
      <Navbar /> {/* Ajout de la Navbar */}
      <div className="container mx-auto px-8 py-16">
        {/* Titre du projet */}
        <h1 className="text-5xl font-bold text-orange-500 mb-8">{project.title}</h1>

        {/* Image du projet */}
        <div className="mb-8">
          <img src={project.image} alt={project.title} className="h-auto rounded-lg shadow-lg" />
        </div>

        {/* Description du projet */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-neutral-300 mb-4">Description</h2>
          <p className="text-lg leading-relaxed text-neutral-400">{project.description}</p>
        </div>

        {/* Problématiques rencontrées */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Problématiques rencontrées</h2>
          <p className="text-lg leading-relaxed text-neutral-400">{project.issues.join(", ")}</p>
        </div>

        {/* Compétences acquises */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Compétences acquises</h2>
          <p className="text-lg leading-relaxed text-neutral-400">{project.skills.join(", ")}</p>
        </div>

        {/* Lien vers GitHub */}
        <div className="text-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300"
          >
            Voir le projet sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
