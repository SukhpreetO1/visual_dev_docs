import React from 'react';

export const SplitPane: React.FC<{ left: React.ReactNode; right: React.ReactNode }> = ({ left, right }) => {
  return (
    <div className="flex w-full h-full divide-x divide-slate-800">
      <div className="w-1/2 h-full overflow-auto">{left}</div>
      <div className="w-1/2 h-full overflow-auto">{right}</div>
    </div>
  );
};
