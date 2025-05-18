
import React from 'react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period }) => (
  <div className="mb-4 p-3 bg-terminal-bg/30 border border-terminal-border rounded-md">
    <h3 className="text-terminal-green font-bold">{degree}</h3>
    <div className="flex flex-wrap justify-between">
      <span className="text-terminal-text">{institution}</span>
      <span className="text-terminal-blue text-sm">{period}</span>
    </div>
  </div>
);

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "🎓 Licence Professionnelle en Développement Full Stack & DevOps",
      institution: "Faculté des Sciences, Université Hassan II – Ain Chock",
      period: "2023 – 2024"
    },
    {
      degree: "🎓 Technicien Spécialisé en Développement Full Stack",
      institution: "CMFP Lalla Aïcha, Casablanca",
      period: "2021 – 2023"
    },
    {
      degree: "🎓 Baccalauréat Sciences Physiques - Mention Bien",
      institution: "Lycée Mohamed VI, Casablanca",
      period: "2020 – 2021"
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Formation Académique"}</h2>
      
      <div>
        {educationItems.map((item, i) => (
          <EducationItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
