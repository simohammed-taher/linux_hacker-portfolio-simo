
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies }) => (
  <div className="mb-4 p-3 bg-terminal-bg/30 border border-terminal-border rounded-md">
    <h3 className="text-terminal-green font-bold">{title}</h3>
    <p className="my-2 text-terminal-output">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span key={i} className="px-2 py-0.5 bg-terminal-bg border border-terminal-border rounded text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "🗂 Gestion de pointage",
      description: "Application de gestion de présence mensuelle des employés avec calendrier interactif.",
      technologies: ["Node.js", "React", "MySQL"]
    },
    {
      title: "📊 Suivi de consommation gasoil et kilomètres",
      description: "Plateforme de saisie et visualisation de la consommation journalière avec justificatifs.",
      technologies: ["Laravel", "Bootstrap", "MySQL"]
    },
    {
      title: "📦 Application de génération de rapports Excel avec Tkinter",
      description: "Automatisation de création de rapports ACP à partir de fichiers Excel et données JSON.",
      technologies: ["Python", "Tkinter", "pandas"]
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Projets Personnels (GitHub)"}</h2>
      
      <div>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
