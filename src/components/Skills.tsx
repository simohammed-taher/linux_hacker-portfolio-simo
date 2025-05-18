
import React from 'react';

const SkillCategory: React.FC<{title: string, skills: string[]}> = ({ title, skills }) => (
  <div className="mb-4">
    <h3 className="text-terminal-blue font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Python"]
    },
    {
      title: "Frameworks",
      skills: ["Laravel", "React.js", "Node.js", "Bootstrap"]
    },
    {
      title: "Base de données",
      skills: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      title: "Outils DevOps",
      skills: ["Git", "GitHub", "Docker", "CI/CD"]
    },
    {
      title: "Systèmes",
      skills: ["Windows", "Linux (Ubuntu, Debian)"]
    },
    {
      title: "Outils divers",
      skills: ["Visual Studio Code", "Postman", "Figma", "Trello", "SAGE 100"]
    },
    {
      title: "Compétences Transversales",
      skills: ["Esprit d'équipe", "Résolution de problèmes", "Initiative", "Autonomie", "Gestion du temps", "Communication", "Pédagogie"]
    }
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl text-terminal-yellow font-bold mb-4">{"// Compétences Techniques"}</h2>
      
      {skillCategories.map((category, i) => (
        <SkillCategory
          key={i}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
};

export default Skills;
