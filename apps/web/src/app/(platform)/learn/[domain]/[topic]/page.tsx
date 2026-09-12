'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CoreLessonPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [code, setCode] = useState(`// Interactive Git Rebase Simulation
git checkout feature
git rebase main --interactive
// Choose pick, squash, or reword`);
  const [isExecuting, setIsExecuting] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [vizStep, setVizStep] = useState(0);

  const steps = [
    {
      title: '1. Understand the Commit Graph',
      content:
        'Interactive rebase allows you to rewrite, reorder, and combine commits before merging into main.',
      tip: 'Never rebase commits that have already been pushed to a public shared branch!',
    },
    {
      title: '2. Picking vs Squashing',
      content:
        'Squashing merges multiple commits into a single commit to keep git log clean and readable.',
      tip: 'Use fixup instead of squash if you want to discard the child commit message.',
    },
    {
      title: '3. Resolving Conflicts',
      content:
        'If conflicts occur, edit the conflicted files, stage them with git add, and continue with git rebase --continue.',
      tip: 'You can abort the rebase at any time using git rebase --abort.',
    },
  ];

  const handleRunCode = () => {
    setIsExecuting(true);
    setLogs(['[WASM-JIT] Initializing WebAssembly Thread 0...']);
    setVizStep(0);

    setTimeout(() => {
      setLogs((prev) => [...prev, '✔ Step 1: Checked out branch "feature" (Commit C3)']);
      setVizStep(1);
    }, 600);

    setTimeout(() => {
      setLogs((prev) => [...prev, '🔄 Step 2: Rebasing 2 commits onto main (Commit C2)']);
      setVizStep(2);
    }, 1300);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '✨ Step 3: Applied C3* onto main. Rebase complete with 0 conflicts!',
      ]);
      setVizStep(3);
      setIsExecuting(false);
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col font-sans bg-[#0B1326] text-[#DAE2FD]">
      {/* Top Breadcrumb & Progress Header */}
      <div className="border-b border-[#1E293B] bg-[#171F33]/60 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>{' '}
          /{' '}
          <Link href="/roadmap/git" className="hover:text-white">
            Git
          </Link>{' '}
          / <span className="text-[#68DBA9] font-bold">Interactive Rebase</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-36 bg-[#0B1120] rounded-full h-2 overflow-hidden border border-[#1E293B]">
            <div
              className="bg-gradient-to-r from-[#68DBA9] to-[#85F8C4] h-full transition-all duration-300"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-[#DAE2FD] font-mono font-semibold">
            Step {activeStep + 1} / {steps.length}
          </span>
        </div>
      </div>

      {/* 3-Column Core Workspace matching Stitch Design */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Left Column: Topic Navigation Sidebar */}
        <div className="col-span-3 border-r border-[#1E293B] bg-[#171F33]/40 p-5 overflow-y-auto">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-4">
            Lesson Steps
          </h3>
          <div className="space-y-3">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition shadow-sm ${
                  activeStep === idx
                    ? 'bg-[#25A475]/15 border-[#059669] text-[#F1F5F9] font-semibold ring-1 ring-[#059669]/40'
                    : 'bg-[#171F33] border-[#1E293B] text-[#94A3B8] hover:border-[#334155] hover:text-[#F1F5F9]'
                }`}
              >
                <span className="text-[11px] font-mono block text-[#68DBA9] mb-1">
                  Step {idx + 1}
                </span>
                {s.title.replace(/^\d+\.\s*/, '')}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Column: Documentation + Visual Execution Canvas */}
        <div className="col-span-5 border-r border-[#1E293B] flex flex-col h-full bg-[#0B1326]">
          {/* Documentation Section */}
          <div className="p-6 border-b border-[#1E293B] overflow-y-auto flex-1">
            <h2 className="text-2xl font-bold text-[#F1F5F9] mb-3">{steps[activeStep].title}</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              {steps[activeStep].content}
            </p>
            <div className="p-4 rounded-xl bg-[#25A475]/10 border border-[#059669]/30 text-xs text-[#68DBA9] flex items-start gap-3">
              <span className="text-base">💡</span>
              <div>
                <strong className="block mb-1 text-white">Pro Tip:</strong>
                {steps[activeStep].tip}
              </div>
            </div>
          </div>

          {/* Interactive SVG Visualization Canvas */}
          <div className="h-72 p-5 bg-[#131B2E] flex flex-col justify-between relative border-t border-[#1E293B]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                Commit Graph Engine
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0B1120] text-[#68DBA9] border border-[#1E293B]">
                ⚡ WASM 60 FPS
              </span>
            </div>

            {/* Live SVG Graph Visualization */}
            <div className="flex-1 flex items-center justify-center relative">
              <svg className="w-full h-full max-h-40" viewBox="0 0 500 120">
                <line
                  x1="60"
                  y1="40"
                  x2="440"
                  y2="40"
                  stroke="#1E293B"
                  strokeWidth="4"
                  strokeDasharray="4 4"
                />
                <line x1="60" y1="40" x2="300" y2="40" stroke="#059669" strokeWidth="4" />

                <g transform="translate(80, 40)">
                  <circle r="18" fill="#171F33" stroke="#059669" strokeWidth="3" />
                  <text textAnchor="middle" dy="4" fill="#68DBA9" fontSize="11" fontWeight="bold">
                    C1
                  </text>
                </g>
                <g transform="translate(200, 40)">
                  <circle r="18" fill="#171F33" stroke="#059669" strokeWidth="3" />
                  <text textAnchor="middle" dy="4" fill="#68DBA9" fontSize="11" fontWeight="bold">
                    C2
                  </text>
                </g>

                <path
                  d="M 200 40 Q 240 80 280 80 L 400 80"
                  fill="none"
                  stroke={vizStep >= 1 ? '#EA580C' : '#334155'}
                  strokeWidth="3"
                />

                <g
                  transform={vizStep >= 2 ? 'translate(320, 40)' : 'translate(340, 80)'}
                  className="transition-all duration-700"
                >
                  <circle
                    r="20"
                    fill={vizStep >= 1 ? '#EA580C' : '#171F33'}
                    stroke="#FFB599"
                    strokeWidth="3"
                  />
                  <text textAnchor="middle" dy="4" fill="#ffffff" fontSize="12" fontWeight="bold">
                    {vizStep >= 2 ? 'C3*' : 'C3'}
                  </text>
                </g>
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-mono">
              <span>
                Branch: <strong className="text-[#FFB599]">feature</strong>
              </span>
              <span>
                Rebase Target: <strong className="text-[#68DBA9]">main (C2)</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Editor & Execution Output */}
        <div className="col-span-4 flex flex-col h-full bg-[#0B1120]">
          <div className="p-4 border-b border-[#1E293B] flex items-center justify-between bg-[#171F33]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
              Code Sandbox
            </span>
            <button
              onClick={handleRunCode}
              disabled={isExecuting}
              className="px-5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#F66018] font-bold text-xs text-white transition shadow-lg shadow-orange-900/30 disabled:opacity-50 flex items-center gap-2"
            >
              {isExecuting ? '⏳ Executing...' : '▶ Run Code'}
            </button>
          </div>
          <div className="flex-1 p-4 bg-[#0B1120] font-mono text-xs text-[#DAE2FD]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent resize-none focus:outline-none font-mono text-[#DAE2FD] leading-relaxed"
            />
          </div>
          <div className="h-44 border-t border-[#1E293B] p-4 bg-[#060E20] font-mono text-[11px] text-[#68DBA9] overflow-y-auto">
            <div className="text-[#94A3B8] mb-2 font-bold uppercase tracking-wider text-[10px]">
              Console Output
            </div>
            {logs.length === 0 ? (
              <span className="text-[#94A3B8] italic">
                Click &quot;Run Code&quot; to execute interactive rebase simulation...
              </span>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="mb-1">
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
