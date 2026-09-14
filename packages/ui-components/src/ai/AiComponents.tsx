import React from 'react';

export const ChatSidebar: React.FC<{ messages: Array<{ role: string; text: string }> }> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-800 p-4 font-sans">
      <h4 className="font-bold text-slate-100 text-sm mb-3">AI Assistant</h4>
      <div className="flex-1 overflow-auto space-y-3 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`p-2.5 rounded-lg text-xs ${m.role === 'user' ? 'bg-sky-950 text-sky-200 ml-4' : 'bg-slate-800 text-slate-200 mr-4'}`}>
            <span className="font-bold block text-[10px] text-slate-400 mb-1">{m.role.toUpperCase()}</span>
            {m.text}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Ask AI..." className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500" />
    </div>
  );
};

export const ExplainerPopup: React.FC<{ topic: string; explanation: string }> = ({ topic, explanation }) => {
  return (
    <div className="p-4 bg-sky-950 border border-sky-800 rounded-lg text-sky-200 text-xs space-y-2">
      <div className="font-bold text-sky-400">AI Explainer: {topic}</div>
      <div>{explanation}</div>
    </div>
  );
};

export const QuizCard: React.FC<{ question: string; options: string[]; onAnswer?: (opt: string) => void }> = ({
  question,
  options,
  onAnswer
}) => {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <div className="font-semibold text-slate-100 text-sm">{question}</div>
      <div className="space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer?.(opt)}
            className="w-full text-left p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded text-xs text-slate-300 transition-colors"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};
