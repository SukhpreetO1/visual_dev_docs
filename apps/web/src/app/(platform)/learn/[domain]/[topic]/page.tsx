'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CoreLessonPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [code, setCode] = useState(`// Interactive Git Rebase Simulation
git checkout feature
git rebase main --interactive
// Choose pick, squash, or reword`);
  const [stdout, setStdout] = useState('');

  const steps = [
    {
      title: '1. Understand the Commit Graph',
      content: 'Interactive rebase allows you to rewrite commit history before pushing to remote.',
    },
    {
      title: '2. Picking vs Squashing',
      content: 'Squashing combines multiple commits into a single cohesive commit.',
    },
    {
      title: '3. Resolving Conflicts',
      content:
        'When conflicts occur during rebase, edit files, git add, and run git rebase --continue.',
    },
  ];

  const handleRun = () => {
    setStdout(`[SIMULATION] Executing code snippet...
Step 1: Checking out branch 'feature'
Step 2: Starting interactive rebase onto 'main'
Step 3: Commits rebased successfully (0 conflicts).`);
  };

  return (
    <>
      {/* Top Breadcrumb & Progress Header */}
      <div className="border-b border-slate-800 bg-slate-900/60 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/dashboard">Dashboard</Link> / <Link href="/roadmap/git">Git</Link> /{' '}
          <span className="text-white font-medium">Interactive Rebase</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-32 bg-slate-800 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Step {activeStep + 1} / {steps.length}
          </span>
        </div>
      </div>

      {/* 3-Column Core Workspace per Plan §3.2 */}
      <div className="h-[calc(100vh-7rem)] grid grid-cols-12 overflow-hidden">
        {/* Left Column: Topic Navigation Sidebar (3 cols) */}
        <div className="col-span-3 border-r border-slate-800 bg-slate-900/40 p-4 overflow-y-auto">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Lesson Steps
          </h3>
          <div className="space-y-2">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-3 rounded-xl border text-sm transition ${
                  activeStep === idx
                    ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Column: Documentation + Visual Canvas (5 cols) */}
        <div className="col-span-5 border-r border-slate-800 flex flex-col h-full bg-slate-950">
          {/* Documentation Section */}
          <div className="p-6 border-b border-slate-800 overflow-y-auto flex-1">
            <h2 className="text-2xl font-bold text-slate-100 mb-3">{steps[activeStep].title}</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {steps[activeStep].content}
            </p>
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-300">
              💡 <strong>Pro Tip:</strong> Never rebase commits that have already been pushed to a
              public shared branch!
            </div>
          </div>

          {/* Visualization Canvas Section */}
          <div className="h-64 p-4 bg-slate-900/90 flex flex-col justify-between relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">
                Visual Execution Canvas
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SVG Engine
              </span>
            </div>
            {/* Visual Step Canvas Animation Mock */}
            <div className="flex-1 flex items-center justify-center gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30">
                C1
              </div>
              <div className="h-0.5 w-10 bg-slate-700" />
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30">
                C2
              </div>
              <div className="h-0.5 w-10 bg-slate-700" />
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-500/30 ring-4 ring-blue-500/20">
                C3*
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Playground Code Editor + Output (4 cols) */}
        <div className="col-span-4 flex flex-col h-full bg-slate-900/30">
          <div className="p-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
            <span className="text-xs font-mono uppercase text-slate-400">
              Interactive Playground
            </span>
            <button
              onClick={handleRun}
              className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs text-white transition shadow-md shadow-emerald-600/20"
            >
              ▶ Run Code
            </button>
          </div>
          <div className="flex-1 p-4 bg-slate-950 font-mono text-xs text-slate-200">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent resize-none focus:outline-none font-mono text-slate-300"
            />
          </div>
          {stdout && (
            <div className="h-40 border-t border-slate-800 p-3 bg-slate-950 font-mono text-[11px] text-emerald-400 overflow-y-auto">
              <pre>{stdout}</pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
