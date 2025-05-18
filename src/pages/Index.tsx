
import React, { useState, useEffect } from 'react';
import Terminal from '@/components/Terminal';
import CommandLine from '@/components/CommandLine';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Github, Linkedin, Mail, Info } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [typingComplete, setTypingComplete] = useState<{[key: string]: boolean}>({});
  const [showNameIntro, setShowNameIntro] = useState(false);
  const [initialAnimationsPlayed, setInitialAnimationsPlayed] = useState(false);
  
  const handleCommandComplete = (command: string) => {
    setTypingComplete(prev => ({ ...prev, [command]: true }));
  };

  useEffect(() => {
    // Only play initial animations once when component mounts
    if (!initialAnimationsPlayed) {
      // Start by showing the name intro
      setTimeout(() => {
        setShowNameIntro(true);
      }, 500);
  
      // Then show the welcome command
      setTimeout(() => {
        setTypingComplete(prev => ({ ...prev, 'welcome': true }));
      }, 2000);
      
      // Then show the help command
      setTimeout(() => {
        setTypingComplete(prev => ({ ...prev, 'help': true }));
        setInitialAnimationsPlayed(true);
      }, 3500);
    }
  }, [initialAnimationsPlayed]);
  
  const handleSectionSelect = (section: string) => {
    setActiveSection(section === 'clear' ? null : section);
    
    // If section is "clear", reset the terminal
    if (section === 'clear') {
      setShowNameIntro(true);
      setTypingComplete({
        'welcome': true,
        'help': true
      });
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text p-4 md:p-8 max-w-5xl mx-auto">
      {/* Header with name and matrix-like gradient background */}
      <div className="mb-8 p-6 rounded-lg border border-terminal-border bg-gradient-to-r from-terminal-bg via-terminal-border/10 to-terminal-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* Matrix-like numbers background */}
          <div className="text-xs text-terminal-green font-mono leading-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="overflow-hidden">
                {Array.from({ length: 100 }).map((_, j) => (
                  <span key={j} className="inline-block">
                    {Math.round(Math.random())}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative z-10">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-terminal-green mb-2 tracking-wider">MOHAMMED TAHER</h1>
            <p className="text-terminal-text/80">
              <span className="text-terminal-yellow">Développeur Full Stack</span> | 
              <span className="text-terminal-purple"> DevOps Enthusiast</span>
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com/simohammed-taher" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-terminal-border rounded-md hover:bg-terminal-border/30 transition-colors hover:text-terminal-green hover:border-terminal-green"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammed-taher-/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-terminal-border rounded-md hover:bg-terminal-border/30 transition-colors hover:text-terminal-blue hover:border-terminal-blue"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:simohamedtaher123@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-terminal-border rounded-md hover:bg-terminal-border/30 transition-colors hover:text-terminal-yellow hover:border-terminal-yellow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Location info */}
        <div className="mt-4 text-sm flex items-center gap-2 text-terminal-text/60">
          <Info className="h-4 w-4" />
          <span>Casablanca, Maroc</span> | 
          <span className="text-terminal-green/60"> 06 19 91 67 83</span>
        </div>
      </div>
      
      <Terminal title="terminal@mohammed:~">
        {/* ASCII Art Name */}
        {showNameIntro && (
          <div className="font-mono text-terminal-green mb-6 overflow-x-auto whitespace-pre animate-pulse-slow">
            {`
 __  __  ___  _   _   _   __  __ __  __ _____ ____    _____  _   _   _ _____ ____  
|  \\/  |/ _ \\| | | | / \\ |  \\/  |  \\/  | ____|  _ \\  |_   _|/ \\ | | | | ____|  _ \\ 
| |\\/| | | | | |_| |/ _ \\| |\\/| | |\\/| |  _| | | | |   | | / _ \\| |_| |  _| | |_) |
| |  | | |_| |  _  / ___ \\ |  | | |  | | |___| |_| |   | |/ ___ \\  _  | |___|  _ < 
|_|  |_|\\___/|_| |_/_/   \\_\\_|  |_|_|  |_|_____|____/    |_/_/   \\_\\|_|_|_____|_| \\_\\
            `}
          </div>
        )}
        
        {typingComplete['welcome'] && (
          <CommandLine 
            command="echo 'Bienvenue sur mon portfolio en ligne!'" 
            output={
              <p className="text-terminal-text animate-fade-in">Bienvenue sur mon portfolio en ligne! Je suis <span className="text-terminal-green font-semibold">Mohammed Taher</span>, développeur Full Stack passionné par les technologies web, le DevOps et la transformation numérique.</p>
            } 
            onComplete={() => handleCommandComplete('welcome')}
            typingSpeed={30}
            isTyping={!typingComplete['welcome']}
          />
        )}
        
        {typingComplete['help'] && (
          <CommandLine 
            command="help" 
            output={
              <div className="space-y-2 animate-fade-in">
                <p className="text-terminal-blue">Liste des commandes disponibles:</p>
                <ul className="space-y-2 pl-4">
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('about')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">about</span> - À propos de moi
                  </li>
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('skills')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">skills</span> - Mes compétences techniques
                  </li>
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('experience')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">experience</span> - Mes expériences professionnelles
                  </li>
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('education')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">education</span> - Ma formation académique
                  </li>
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('projects')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">projects</span> - Mes projets personnels
                  </li>
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('contact')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">contact</span> - Mes coordonnées
                  </li>
                  <li className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group" onClick={() => handleSectionSelect('clear')}>
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">clear</span> - Effacer le terminal
                  </li>
                </ul>
                <p className="mt-4 text-terminal-text/60 italic text-sm">Cliquez sur une commande ou tapez-la pour l'exécuter.</p>
              </div>
            }
            onComplete={() => handleCommandComplete('help')}
            typingSpeed={30}
            isTyping={!typingComplete['help']}
          />
        )}

        {/* Display section based on command */}
        {activeSection && (
          <CommandLine 
            command={activeSection}
            output={
              activeSection === 'about' ? <About /> :
              activeSection === 'skills' ? <Skills /> :
              activeSection === 'experience' ? <Experience /> :
              activeSection === 'education' ? <Education /> :
              activeSection === 'projects' ? <Projects /> :
              activeSection === 'contact' ? <Contact /> :
              <p className="text-terminal-error">Commande non reconnue. Tapez 'help' pour voir les commandes disponibles.</p>
            }
            isTyping={false}
          />
        )}
        
        {/* Current command line */}
        <div className="flex mt-6 border-t border-terminal-border/30 pt-4">
          <span className="prompt mr-2 text-terminal-prompt">mohammed@portfolio:~$</span>
          <span className="typed-cursor text-white">|</span>
        </div>
      </Terminal>

      <Footer />
    </div>
  );
};

export default Index;
