import React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-100">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 text-xl font-bold">×</button>
        </div>
        {children}
      </div>
    </div>
  );
};
