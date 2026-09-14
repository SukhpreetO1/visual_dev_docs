import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm ${className}`}>
      {title && <h3 className="text-lg font-semibold text-slate-100 mb-3">{title}</h3>}
      {children}
    </div>
  );
};
