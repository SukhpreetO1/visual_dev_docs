'use client';

import React from 'react';
import Link from 'next/link';

export default function RoadmapPage({ params }: { params: Promise<{ domain: string }> }) {
  const resolvedParams = React.use(params);

  const nodes = [
    { id: 'n1', label: '1. Git Basics & Architecture', type: 'TOPIC', topic: 'basics' },
    { id: 'n2', label: '2. Branching & Merging', type: 'TOPIC', topic: 'branching' },
    { id: 'n3', label: '3. Interactive Rebase', type: 'LESSON', topic: 'rebase', active: true },
    { id: 'n4', label: '4. Advanced Cherry-Pick', type: 'LESSON', topic: 'cherry-pick' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            <span className="text-blue-400">{resolvedParams.domain}</span> Learning Roadmap
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Interactive graph showing topic dependencies and lesson progression.
          </p>
        </div>
        <Link
          href="/cheatsheet/git"
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition"
        >
          View Printable Cheat Sheet
        </Link>
      </div>

      {/* Visual Graph Container */}
      <div className="p-12 rounded-3xl bg-slate-900 border border-slate-800 min-h-[500px] flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center gap-12 max-w-lg w-full">
          {nodes.map((node, i) => (
            <React.Fragment key={node.id}>
              <Link
                href={`/learn/${resolvedParams.domain}/${node.topic}`}
                className={`w-full p-6 rounded-2xl border text-center transition shadow-lg ${
                  node.active
                    ? 'bg-blue-600/20 border-blue-500 text-blue-200 font-bold ring-4 ring-blue-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono uppercase text-blue-400 block mb-1">
                  {node.type}
                </span>
                {node.label}
              </Link>
              {i < nodes.length - 1 && <div className="w-0.5 h-8 bg-slate-800" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
