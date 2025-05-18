
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CommandLineProps {
  prompt?: string;
  command: string;
  output?: React.ReactNode;
  isTyping?: boolean;
  typingSpeed?: number;
  onComplete?: () => void;
  className?: string;
}

const CommandLine: React.FC<CommandLineProps> = ({
  prompt = "mohammed@portfolio:~$",
  command,
  output,
  isTyping = true,
  typingSpeed = 50,
  onComplete,
  className
}) => {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isCommandTyped, setIsCommandTyped] = useState(!isTyping);
  const [showOutput, setShowOutput] = useState(!isTyping);
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedCommand(command);
      setIsCommandTyped(true);
      setShowOutput(true);
      onComplete && onComplete();
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      if (index < command.length) {
        setDisplayedCommand((prev) => prev + command.charAt(index));
        index++;
      } else {
        clearInterval(timer);
        setIsCommandTyped(true);
        
        // Wait a bit before showing output
        setTimeout(() => {
          setShowOutput(true);
          onComplete && onComplete();
        }, 300);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [command, isTyping, typingSpeed, onComplete]);

  useEffect(() => {
    if (commandRef.current && showOutput) {
      commandRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [showOutput]);

  return (
    <div className={cn("mb-4", className)} ref={commandRef}>
      <div className="flex">
        <span className="prompt mr-2 text-terminal-prompt">{prompt}</span>
        <span className="command text-terminal-text">{displayedCommand}</span>
        {isTyping && !isCommandTyped && (
          <span className="typed-cursor text-white">|</span>
        )}
      </div>
      {showOutput && output && (
        <div className="command-output mt-2 text-terminal-output">{output}</div>
      )}
    </div>
  );
};

export default CommandLine;
