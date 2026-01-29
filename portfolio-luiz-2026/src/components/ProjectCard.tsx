// src/components/ProjectCard.tsx

interface ProjectProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

/**
 * Componente reutilizável para exibir projetos.
 * Essencial para manter a consistência visual do portfólio.
 */
export default function ProjectCard({ title, description, techs, link }: ProjectProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-tags">
        {techs.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-project">
        Ver Repositório
      </a>
    </div>
  );
}