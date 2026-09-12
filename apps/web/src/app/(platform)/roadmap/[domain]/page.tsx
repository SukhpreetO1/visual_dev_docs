'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RoadmapPage({ params }: { params: Promise<{ domain: string }> }) {
  const resolvedParams = React.use(params);
  const [selectedNode, setSelectedNode] = useState<string | null>('n3');

  const nodes = [
    {
      id: 'n1',
      title: '1. Git Architecture & Internal Objects',
      type: 'TOPIC',
      status: 'COMPLETED',
      topic: 'basics',
      desc: 'Understand commits, trees, blobs, and repository references.',
    },
    {
      id: 'n2',
      title: '2. Branching, Merging & Fast-Forwarding',
      type: 'TOPIC',
      status: 'COMPLETED',
      topic: 'branching',
      desc: 'Create feature branches, perform 3-way merges, and handle fast-forward pointers.',
    },
    {
      id: 'n3',
      title: '3. Interactive Rebase & History Rewriting',
      type: 'LESSON',
      status: 'IN_PROGRESS',
      topic: 'rebase',
      desc: 'Master git rebase -i, squashing commits, and clean git history management.',
      active: true,
    },
    {
      id: 'n4',
      title: '4. Advanced Cherry-Pick & Conflict Resolution',
      type: 'LESSON',
      status: 'LOCKED',
      topic: 'cherry-pick',
      desc: 'Port individual commits across branches and resolve merge conflicts confidently.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full">
      <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Interactive Graph
            </span>
            <span className="text-xs text-slate-400">
              Domain: <strong className="text-slate-200 uppercase">{resolvedParams.domain}</strong>
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {resolvedParams.domain.toUpperCase()} Learning Roadmap
          </h1>
        </div>
        <Link
          href={`/cheatsheet/${resolvedParams.domain}`}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 transition shadow-md flex items-center gap-2"
        >
          📋 Printable Cheat Sheet
        </Link>
      </div>

      {/* Interactive Visual Graph Layout */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Node Graph Flow View */}
        <div className="col-span-8 p-10 rounded-3xl bg-slate-900/60 border border-slate-800 min-h-[550px] flex flex-col items-center justify-center relative shadow-2xl">
          <div className="w-full max-w-xl space-y-6">
            {nodes.map((node, idx) => {
              const isSelected = selectedNode === node.id;
              return (
                <React.Fragment key={node.id}>
                  <div
                    onClick={() => setSelectedNode(node.id)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer shadow-lg relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border-cyan-500 text-white ring-2 ring-cyan-500/40 shadow-cyan-500/10'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {node.type}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                          node.status === 'COMPLETED'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : node.status === 'IN_PROGRESS'
                              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                              : 'bg-slate-800 text-slate-500 border-slate-700'
                        }`}
                      >
                        {node.status.replace('_', ' ')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{node.title}</h3>
                    <p className="text-xs text-slate-400">{node.desc}</p>
                  </div>

                  {idx < nodes.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-slate-700" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Node Inspector Detail Panel */}
        <div className="col-span-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 sticky top-24 shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Topic Inspector
          </h3>
          {selectedNode ? (
            (() => {
              const node = nodes.find((n) => n.id === selectedNode)!;
              return (
                <div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold block w-fit mb-3">
                    {node.type}
                  </span>
                  <h2 className="text-xl font-bold text-slate-100 mb-2">{node.title}</h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{node.desc}</p>
                  <Link
                    href={`/learn/${resolvedParams.domain}/${node.topic}`}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-bold text-xs text-white shadow-lg shadow-cyan-500/20 transition block text-center"
                  >
                    Launch Interactive Lesson →
                  </Link>
                </div>
              );
            })()
          ) : (
            <p className="text-xs text-slate-500 italic">
              Select a node from the roadmap to inspect details...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
