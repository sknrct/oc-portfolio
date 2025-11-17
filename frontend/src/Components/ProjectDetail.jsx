import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/projects/${id}/`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Erreur fetch projet :", err));
  }, [id]);

  if (!project) return <p>Chargement du projet...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
