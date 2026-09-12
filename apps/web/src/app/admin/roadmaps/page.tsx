import React from 'react';

export default function AdminRoadmapsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Roadmap Graph Node Editor</h1>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs text-white">
          + Add Node
        </button>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-400">
        Roadmap node position and dependency graph editor.
      </div>
    </div>
  );
}
