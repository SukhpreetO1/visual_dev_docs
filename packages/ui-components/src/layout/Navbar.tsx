import React from 'react';

export const Navbar: React.FC<{ title?: string; userEmail?: string }> = ({ title = 'Visual Dev Docs', userEmail }) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-white">V</div>
        <span className="font-bold text-slate-100">{title}</span>
      </div>
      {userEmail && <span className="text-xs text-slate-400 font-mono bg-slate-800 px-3 py-1 rounded-full">{userEmail}</span>}
    </header>
  );
};
