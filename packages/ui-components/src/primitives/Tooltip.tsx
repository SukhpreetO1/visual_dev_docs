import React from 'react';

export const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-900 text-slate-200 text-xs px-2 py-1 rounded shadow-lg border border-slate-700 whitespace-nowrap z-50">
        {text}
      </div>
    </div>
  );
};
