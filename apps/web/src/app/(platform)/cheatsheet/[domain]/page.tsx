'use client';

import React from 'react';

export default function CheatSheetPage({ params }: { params: Promise<{ domain: string }> }) {
  const resolvedParams = React.use(params);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wider text-slate-100">
            {resolvedParams.domain} Cheat Sheet
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Quick syntax reference and visual command guide.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition shadow-md shadow-blue-600/30"
        >
          🖨 Print Cheat Sheet
        </button>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Interactive Rebase Commands</h3>
          <pre className="p-4 rounded-xl bg-slate-950 text-xs font-mono text-slate-300">
            git rebase -i HEAD~3{'\n'}git rebase --continue{'\n'}git rebase --abort
          </pre>
        </div>
      </div>
    </div>
  );
}
