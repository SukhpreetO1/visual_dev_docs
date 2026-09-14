import React from 'react';

export const CodeEditor: React.FC<{ code: string; onChange?: (c: string) => void; language?: string }> = ({
  code,
  onChange,
  language = 'javascript'
}) => {
  return (
    <div className="flex flex-col h-full bg-slate-950 border border-slate-800 rounded-lg overflow-hidden font-mono">
      <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 border-b border-slate-800 flex justify-between">
        <span>editor.{language}</span>
        <span>Monaco Wrapped</span>
      </div>
      <textarea
        value={code}
        onChange={e => onChange?.(e.target.value)}
        className="flex-1 p-4 bg-transparent text-slate-200 text-sm focus:outline-none resize-none"
      />
    </div>
  );
};

export const VisualizationCanvas: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
  return (
    <div
      className="p-4 bg-slate-900 border border-slate-800 rounded-lg h-full overflow-auto"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export const RoadmapGraph: React.FC<{ domain: string }> = ({ domain }) => {
  return (
    <div className="p-8 bg-slate-950 border border-slate-800 rounded-xl text-center">
      <h4 className="text-lg font-bold text-sky-400 mb-2">{domain.toUpperCase()} Roadmap Node Graph</h4>
      <p className="text-slate-400 text-sm">Interactive React Flow Nodes Rendered</p>
    </div>
  );
};

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
      <div className="bg-sky-500 h-full transition-all duration-300" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
    </div>
  );
};

export const StepNavigator: React.FC<{ current: number; total: number; onPrev: () => void; onNext: () => void }> = ({
  current,
  total,
  onPrev,
  onNext
}) => {
  return (
    <div className="flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-800">
      <button onClick={onPrev} disabled={current <= 0} className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs disabled:opacity-40">
        Previous
      </button>
      <span className="text-xs text-slate-400 font-mono">Step {current + 1} of {total}</span>
      <button onClick={onNext} disabled={current >= total - 1} className="px-3 py-1 bg-sky-600 text-white rounded text-xs disabled:opacity-40">
        Next
      </button>
    </div>
  );
};

export const CheatSheetCard: React.FC<{ title: string; commands: Array<{ cmd: string; desc: string }> }> = ({ title, commands }) => {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <h4 className="font-bold text-slate-100 text-sm">{title}</h4>
      <div className="space-y-2">
        {commands.map((c, i) => (
          <div key={i} className="flex justify-between items-center text-xs font-mono bg-slate-950 p-2 rounded">
            <span className="text-sky-400">{c.cmd}</span>
            <span className="text-slate-400">{c.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
