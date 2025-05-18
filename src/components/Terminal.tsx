
import React, { ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ title = "terminal@mohammed:~", children }) => {
  return (
    <div className="terminal mb-6 shadow-[0_0_15px_rgba(60,255,85,0.15)]">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400 flex-1 text-center">
          {title}
        </div>
        <div className="w-12"></div> {/* Spacer to balance the dots */}
      </div>
      <div className="terminal-body max-h-[600px] overflow-y-auto p-4 border-t border-terminal-border">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
