
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Profil Professionnel"}</h2>
      <p className="text-terminal-output leading-relaxed">
        Développeur Full Stack marocain, jeune, motivé et rigoureux, avec une solide formation technique et des expériences pratiques variées dans le développement web, l'enseignement et la gestion de systèmes informatiques. Mon objectif est de participer activement à des projets innovants où je peux mettre à profit mes compétences en développement, cybersécurité, DevOps et gestion des bases de données, tout en continuant à apprendre et évoluer dans un environnement stimulant.
      </p>
      
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Langues"}</h2>
      <ul className="list-disc pl-6 text-terminal-output">
        <li className="mb-1">🇫🇷 Français : Courant</li>
        <li className="mb-1">🇬🇧 Anglais : Bon niveau technique</li>
        <li className="mb-1">🇲🇦 Arabe : Langue maternelle</li>
      </ul>

      <h2 className="text-xl text-terminal-yellow font-bold">{"// Centres d'Intérêt"}</h2>
      <ul className="list-disc pl-6 text-terminal-output">
        <li className="mb-1">Veille technologique et cybersécurité</li>
        <li className="mb-1">Développement de projets open source</li>
        <li className="mb-1">Enseignement et mentorat</li>
        <li className="mb-1">Sports collectifs et esprit d'équipe</li>
      </ul>
    </div>
  );
};

export default About;
