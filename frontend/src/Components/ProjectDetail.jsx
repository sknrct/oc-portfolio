import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";

const ProjectDetail = () => {
  const { id } = useParams(); // Récupère l'ID du projet depuis l'URL
  const project = PROJECTS.find((project) => project.id === parseInt(id)); // Trouve le projet correspondant

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
