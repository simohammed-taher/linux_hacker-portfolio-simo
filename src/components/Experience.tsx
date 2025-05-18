
import React from 'react';

interface ExperienceItemProps {
  position: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  position,
  company,
  location,
  period,
  duration,
  responsibilities
}) => (
  <div className="mb-6 bg-terminal-bg/30 p-4 border border-terminal-border rounded-md">
    <h3 className="text-terminal-green font-bold">{position}</h3>
    <div className="flex flex-wrap justify-between mb-2">
      <span className="text-terminal-text">{company} – {location}</span>
      <span className="text-terminal-blue">
        <span className="text-sm">{period}</span> <span className="text-xs">({duration})</span>
      </span>
    </div>
    <ul className="list-disc pl-5 text-terminal-output">
      {responsibilities.map((responsibility, i) => (
        <li key={i} className="mb-1">{responsibility}</li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      position: "👨‍💻 Développeur Web Junior (Stage)",
      company: "inERP",
      location: "Casablanca",
      period: "Mars – Mai 2023",
      duration: "2 mois",
      responsibilities: [
        "Participation au développement de modules pour le système ERP SAGE 100",
        "Intégration de solutions personnalisées pour la gestion comptable",
        "Tests fonctionnels, débogage et support utilisateur"
      ]
    },
    {
      position: "👨‍🏫 Enseignant d'informatique",
      company: "Lycée Fatima Ezzahra",
      location: "Casablanca",
      period: "Janvier – Mai 2024",
      duration: "5 mois",
      responsibilities: [
        "Initiation des lycéens aux outils numériques et à la programmation",
        "Préparation de supports pédagogiques interactifs",
        "Animation d'ateliers de sensibilisation à la cybersécurité"
      ]
    },
    {
      position: "👨‍🏫 Formateur en Informatique (Freelance)",
      company: "",
      location: "Casablanca",
      period: "2024",
      duration: "4 mois",
      responsibilities: [
        "Formations personnalisées en bureautique, web et algorithmique",
        "Suivi pédagogique des apprenants et évaluation des acquis"
      ]
    },
    {
      position: "🕵️‍♂️ Agent de Contrôle de Propreté",
      company: "Casabaia",
      location: "Casablanca",
      period: "Janvier – Mai 2025",
      duration: "5 mois",
      responsibilities: [
        "Vérification de la conformité des sites de collecte et tri des déchets",
        "Rédaction de rapports de contrôle et collaboration avec les équipes terrain"
      ]
    }
  ];
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Expériences Professionnelles"}</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
