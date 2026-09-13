'use client';

import React, { useState } from 'react';
import { SkipBack, SkipForward, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, MessageSquare, BookOpen, TrendingUp, Terminal, Copy } from 'lucide-react';

const C = {
  surface: '#0b1326',
  surfaceInset: '#0B1120',
  surfaceCard: '#1E293B',
  surfaceContainerLowest: '#060e20',
  surfaceContainerLow: '#131b2e',
  surfaceContainer: '#171f33',
  surfaceContainerHigh: '#222a3d',
  surfaceContainerHighest: '#2d3449',
  primary: '#68dba9',
  primaryContainer: '#25a475',
  onPrimary: '#003825',
  secondary: '#ffb599',
  secondaryContainer: '#f66018',
  tertiary: '#ffb3ae',
  onSurface: '#dae2fd',
  onSurfaceVariant: '#bccac0',
  textHeading: '#F1F5F9',
  textMuted: '#94A3B8',
  error: '#ffb4ab',
};

interface PageProps {
  params: Promise<{ domain: string; topic: string }>;
}

export default function LearnTopicPage({ params }: PageProps) {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(4);
  const [activeTab, setActiveTab] = useState<'stdout' | 'watch' | 'profiler'>('stdout');
  const totalSteps = 12;

  // Binary tree node positions for in-order traversal (Left, Root, Right)
  const treeNodes = [
    { id: 1, x: 200, y: 60, val: 4, active: false, done: true, label: 'Root' },
    { id: 2, x: 100, y: 130, val: 2, active: false, done: true, label: 'L' },
    { id: 3, x: 300, y: 130, val: 6, active: true, done: false, label: 'R' },
    { id: 4, x: 50, y: 200, val: 1, active: false, done: true, label: 'L' },
    { id: 5, x: 150, y: 200, val: 3, active: false, done: true, label: 'R' },
    { id: 6, x: 250, y: 200, val: 5, active: false, done: false, label: 'L' },
    { id: 7, x: 350, y: 200, val: 7, active: false, done: false, label: 'R' },
  ];

  const edges = [
    { x1: 200, y1: 70, x2: 100, y2: 120 },
    { x1: 200, y1: 70, x2: 300, y2: 120 },
    { x1: 100, y1: 140, x2: 50, y2: 190 },
    { x1: 100, y1: 140, x2: 150, y2: 190 },
    { x1: 300, y1: 140, x2: 250, y2: 190 },
    { x1: 300, y1: 140, x2: 350, y2: 190 },
  ];

  const codeLines = [
    { n: '01', content: <><span style={{ color: C.primary }}>def</span> <span style={{ color: '#85f8c4' }}>inorder</span>(node):</>, bg: null },
    { n: '02', content: <>&nbsp;&nbsp;<span style={{ color: C.primary }}>if</span> node <span style={{ color: C.primary }}>is</span> <span style={{ color: C.tertiary }}>None</span>:</>, bg: null },
    { n: '03', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.primary }}>return</span></>, bg: null },
    { n: '04', content: <></>, bg: null },
    { n: '>5', content: <>&nbsp;&nbsp;<span style={{ color: C.primary }}>inorder</span>(node.<span style={{ color: C.onSurface }}>left</span>)<span style={{ color: C.textMuted }}>&nbsp;&nbsp;# ← Recurse Left</span></>, bg: `${C.primary}22` },
    { n: '>6', content: <>&nbsp;&nbsp;<span style={{ color: '#85f8c4' }}>print</span>(node.<span style={{ color: C.secondary }}>val</span>)<span style={{ color: C.textMuted }}>&nbsp;&nbsp;# Visit Node</span></>, bg: `${C.primary}3A` },
    { n: '07', content: <>&nbsp;&nbsp;<span style={{ color: C.primary }}>inorder</span>(node.<span style={{ color: C.onSurface }}>right</span>)<span style={{ color: C.textMuted }}>&nbsp;&nbsp;# → Recurse Right</span></>, bg: null },
    { n: '08', content: <></>, bg: null },
    { n: '09', content: <><span style={{ color: C.primary }}>class</span> <span style={{ color: C.secondary }}>TreeNode</span>:</>, bg: null },
    { n: '10', content: <>&nbsp;&nbsp;<span style={{ color: C.primary }}>def</span> <span style={{ color: '#85f8c4' }}>__init__</span>(<span style={{ color: C.tertiary }}>self</span>, val=<span style={{ color: C.tertiary }}>0</span>, left=<span style={{ color: C.tertiary }}>None</span>, right=<span style={{ color: C.tertiary }}>None</span>):</>, bg: null },
    { n: '11', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.tertiary }}>self</span>.<span style={{ color: C.secondary }}>val</span> = val</>, bg: null },
    { n: '12', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.tertiary }}>self</span>.<span style={{ color: C.secondary }}>left</span> = left; <span style={{ color: C.tertiary }}>self</span>.<span style={{ color: C.secondary }}>right</span> = right</>, bg: null },
    { n: '13', content: <></>, bg: null },
    { n: '14', content: <><span style={{ color: C.textMuted }}># Build & run</span></>, bg: null },
    { n: '15', content: <><span style={{ color: C.primary }}>root</span> = TreeNode(<span style={{ color: C.tertiary }}>4</span>)</>, bg: null },
    { n: '16', content: <><span style={{ color: C.primary }}>inorder</span>(root) <span style={{ color: C.textMuted }}># → 1 2 3 4 5 6 7</span></>, bg: null },
  ];

  const callStackFrames = [
    { label: '▶ inorder(node=Node(6))', color: C.primary, active: true },
    { label: '↳ inorder(node=Node(4)) — awaiting return', color: C.textMuted },
    { label: '↳ inorder(node=None) — base case reached', color: C.textMuted },
    { label: '↳ anonymous / initial call()', color: C.textMuted },
  ];

  return (
    <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: C.surface }}>

      {/* ── TOP BAR: breadcrumb + playback ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 24px', backgroundColor: C.surfaceContainer, borderBottom: `1px solid ${C.surfaceContainerHigh}`, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.textMuted }}>
          <span>DSA</span>
          <ChevronRight size={12} />
          <span>Binary Tree</span>
          <ChevronRight size={12} />
          <span style={{ color: C.primary, fontWeight: 600 }}>In-Order Traversal</span>
          <span style={{ marginLeft: 12, padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceInset, color: C.secondary, fontSize: 11 }}>WASM Node #08</span>
        </div>

        {/* Playback controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.textMuted, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>Step</span>
            <input type="range" min={1} max={totalSteps} value={step} onChange={e => setStep(Number(e.target.value))} style={{ width: 140, accentColor: C.primary }} />
            <span style={{ color: C.primary, fontWeight: 700 }}>{step}</span>
            <span>/ {totalSteps}</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setStep(s => Math.max(1, s - 1))} style={{ padding: 6, borderRadius: 6, border: 'none', backgroundColor: C.surfaceContainerHigh, color: C.onSurface, cursor: 'pointer' }}><SkipBack size={16} /></button>
            <button onClick={() => setPlaying(!playing)} style={{ padding: '6px 14px', borderRadius: 6, border: 'none', backgroundColor: C.secondaryContainer, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: 13 }}>
              {playing ? <Pause size={14} /> : <Play size={14} />}{playing ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => setStep(s => Math.min(totalSteps, s + 1))} style={{ padding: 6, borderRadius: 6, border: 'none', backgroundColor: C.surfaceContainerHigh, color: C.onSurface, cursor: 'pointer' }}><SkipForward size={16} /></button>
            <button onClick={() => setStep(1)} style={{ padding: 6, borderRadius: 6, border: 'none', backgroundColor: 'transparent', color: C.textMuted, cursor: 'pointer' }}><RotateCcw size={16} /></button>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceInset, color: C.primary }}>Python 3.12</span>
        </div>
      </div>

      {/* ── THREE-PANE WORKBENCH ── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '280px 1fr 380px', overflow: 'hidden' }}>

        {/* ── LEFT: Docs + AI sidebar ── */}
        <div style={{ backgroundColor: C.surfaceContainerLow, borderRight: `1px solid ${C.surfaceContainerHigh}`, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* Doc panel */}
          <div style={{ padding: '16px', borderBottom: `1px solid ${C.surfaceContainerHigh}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <BookOpen size={14} style={{ color: C.primary }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary, fontWeight: 600, textTransform: 'uppercase' }}>Recursive Call Hierarchy</span>
            </div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: C.textHeading, margin: '0 0 8px' }}>In-Order Traversal (L → Root → R)</h3>
            <p style={{ fontSize: 13, color: C.onSurfaceVariant, lineHeight: 1.7, margin: 0 }}>
              Recursively visits the <strong style={{ color: C.primary }}>left subtree</strong>, then processes the <strong style={{ color: C.secondary }}>root node</strong>, then the <strong style={{ color: C.primary }}>right subtree</strong>. For a BST, this produces sorted ascending output.
            </p>
          </div>

          {/* Execution step panel */}
          <div style={{ padding: '16px', borderBottom: `1px solid ${C.surfaceContainerHigh}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <TrendingUp size={14} style={{ color: C.secondary }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.secondary, fontWeight: 600, textTransform: 'uppercase' }}>Execution Step {step}</span>
            </div>
            <div style={{ backgroundColor: C.surfaceInset, padding: '10px 12px', borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.7 }}>
              <p style={{ color: C.primary, margin: '0 0 4px', fontWeight: 600 }}>→ Entering: inorder(node=Node(6))</p>
              <p style={{ color: C.textMuted, margin: '0 0 4px' }}>node.left = Node(5) [unvisited]</p>
              <p style={{ color: C.textMuted, margin: 0 }}>node.right = Node(7) [unvisited]</p>
            </div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['Visited: 1', 'Visited: 2', 'Visited: 3', 'Visited: 4'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} /> {t}
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.secondary, display: 'inline-block' }} /> → Currently at Node(6)
              </div>
            </div>
          </div>

          {/* AI Co-pilot */}
          <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <MessageSquare size={14} style={{ color: C.textMuted }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, fontWeight: 600, textTransform: 'uppercase' }}>AI Co-pilot</span>
            </div>
            <div style={{ backgroundColor: C.surfaceInset, padding: '10px 12px', borderRadius: 8, fontSize: 12, color: C.onSurfaceVariant, lineHeight: 1.7, marginBottom: 10 }}>
              💡 <strong style={{ color: C.primary }}>Why does in-order produce sorted output?</strong><br />
              For a BST, left children are always smaller. Visiting left first means smaller values are always processed before larger ones, producing ascending order.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" placeholder="Ask about this step..." style={{ flex: 1, backgroundColor: C.surfaceContainerHigh, border: 'none', color: C.onSurface, fontSize: 12, padding: '8px 12px', borderRadius: 8, outline: 'none', fontFamily: "'Inter', sans-serif" }} />
              <button style={{ padding: '8px 12px', borderRadius: 8, backgroundColor: C.primaryContainer, border: 'none', color: C.onPrimary, cursor: 'pointer', fontWeight: 600, fontSize: 12 }}>Ask</button>
            </div>
          </div>
        </div>

        {/* ── CENTER: Binary Tree SVG + Call Stack ── */}
        <div style={{ backgroundColor: C.surfaceInset, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Tree canvas */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ width: '100%', maxWidth: 460 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ fontSize: 12, color: C.primary, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
                  Binary Tree Traversal — Step {step}/{totalSteps}
                </span>
                <span style={{ fontSize: 11, color: C.textMuted }}>In-Order: L → Root → R</span>
              </div>
              <svg viewBox="0 0 400 240" style={{ width: '100%', height: 'auto' }}>
                {/* Edges */}
                {edges.map(({ x1, y1, x2, y2 }, i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3d4a42" strokeWidth="1.5" />
                ))}
                {/* Nodes */}
                {treeNodes.map(({ id, x, y, val, active, done, label }) => (
                  <g key={id}>
                    <circle
                      cx={x} cy={y} r="22"
                      fill={active ? C.primaryContainer : done ? `${C.primary}26` : C.surfaceContainerHigh}
                      stroke={active ? C.primary : done ? `${C.primary}80` : C.surfaceContainerHighest}
                      strokeWidth={active ? 2.5 : 1.5}
                    />
                    {active && <circle cx={x} cy={y} r="28" fill="none" stroke={C.primary} strokeWidth="1" opacity="0.4" />}
                    <text fill={active ? C.textHeading : done ? C.primary : C.textMuted} fontFamily="Plus Jakarta Sans" fontSize="14" fontWeight="700" textAnchor="middle" x={x} y={y + 5}>{val}</text>
                    <text fill={C.textMuted} fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x={x} y={y + 38}>{label}</text>
                  </g>
                ))}
                {/* Traversal order indicators */}
                {[{ x: 50, y: 225, t: '1st' }, { x: 100, y: 225, t: '2nd' }, { x: 150, y: 225, t: '3rd' }, { x: 200, y: 90, t: '4th' }].map(({ x, y, t }) => (
                  <text key={t} fill={C.primary} fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x={x} y={y}>{t}</text>
                ))}
              </svg>
              {/* Traversal output */}
              <div style={{ padding: '10px 16px', borderRadius: 8, backgroundColor: C.surfaceContainer, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ color: C.textMuted }}>Output:</span>
                {[1, 2, 3, 4].map((n, i) => (
                  <span key={n} style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: `${C.primary}33`, color: C.primary, fontWeight: 600 }}>{n}</span>
                ))}
                <span style={{ color: C.secondary, fontWeight: 600 }}>6 ← current</span>
                {[5, 7].map(n => (
                  <span key={n} style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceContainerHigh, color: C.textMuted }}>{n}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Call stack panel */}
          <div style={{ borderTop: `1px solid ${C.surfaceContainerHigh}`, padding: '16px', backgroundColor: C.surfaceContainerLowest }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <Terminal size={14} style={{ color: C.textMuted }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, textTransform: 'uppercase', fontWeight: 600 }}>Call Stack Execution Memory</span>
              <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary }}>Depth: {callStackFrames.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {callStackFrames.map(({ label, color, active }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 6, backgroundColor: active ? `${C.primary}1A` : C.surfaceContainerHigh + '99' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color, fontWeight: active ? 600 : 400 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Code editor + console ── */}
        <div style={{ backgroundColor: C.surfaceContainerLowest, borderLeft: `1px solid ${C.surfaceContainerHigh}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Editor header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: C.surfaceContainer, borderBottom: `1px solid ${C.surfaceContainerHigh}`, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: `${C.error}CC`, display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: `${C.secondary}CC`, display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: `${C.primary}CC`, display: 'inline-block' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginLeft: 4 }}>binary_tree.py</span>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button style={{ padding: '4px 10px', borderRadius: 6, border: 'none', backgroundColor: C.secondaryContainer, color: '#fff', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                <Play size={12} /> Run
              </button>
              <button style={{ padding: '4px 8px', borderRadius: 6, border: 'none', backgroundColor: C.surfaceContainerHigh, color: C.textMuted, cursor: 'pointer' }}>
                <Copy size={12} />
              </button>
            </div>
          </div>

          {/* Code lines */}
          <div style={{ flex: 1, overflow: 'auto', padding: '12px 0' }}>
            {codeLines.map(({ n, content, bg }) => (
              <div key={n} style={{ display: 'flex', padding: '1px 0', backgroundColor: bg || 'transparent', paddingLeft: bg ? 12 : undefined, paddingRight: bg ? 12 : undefined }}>
                <span style={{ color: n.startsWith('>') ? C.primary : C.textMuted, width: 32, flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, textAlign: 'right', paddingRight: 12, userSelect: 'none' }}>{n.replace('>', '')}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.7, color: C.onSurface }}>{content}</span>
              </div>
            ))}
          </div>

          {/* Console tabs */}
          <div style={{ borderTop: `1px solid ${C.surfaceContainerHigh}`, flexShrink: 0 }}>
            <div style={{ display: 'flex', backgroundColor: C.surfaceContainer }}>
              {(['stdout', 'watch', 'profiler'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '6px 14px', border: 'none', cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500, textTransform: 'capitalize', backgroundColor: activeTab === tab ? C.surfaceContainerHigh : 'transparent', color: activeTab === tab ? C.primary : C.textMuted, borderBottom: activeTab === tab ? `2px solid ${C.primary}` : '2px solid transparent' }}>
                  {tab}
                </button>
              ))}
              <div style={{ marginLeft: 'auto', padding: '4px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
                WASM Active
              </div>
            </div>
            <div style={{ padding: '10px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.7, maxHeight: 140, overflow: 'auto', backgroundColor: C.surfaceContainerLowest }}>
              {activeTab === 'stdout' && (
                <>
                  <p style={{ color: C.textMuted, margin: 0 }}>[0.01ms] VM bootstrapped at heap: 0x00A40</p>
                  <p style={{ color: C.textMuted, margin: 0 }}>[0.04ms] inorder(root) called — root.val = 4</p>
                  <p style={{ color: C.textMuted, margin: 0 }}>[0.07ms] → recurse left: inorder(node.val=2)</p>
                  <p style={{ color: C.textMuted, margin: 0 }}>[0.11ms] → recurse left: inorder(node.val=1)</p>
                  <p style={{ color: C.primary, margin: 0, fontWeight: 600 }}>[0.14ms] print(1) → OUTPUT: 1</p>
                  <p style={{ color: C.primary, margin: 0, fontWeight: 600 }}>[0.18ms] print(2) → OUTPUT: 2</p>
                  <p style={{ color: C.primary, margin: 0, fontWeight: 600 }}>[0.22ms] print(3) → OUTPUT: 3</p>
                  <p style={{ color: C.primary, margin: 0, fontWeight: 600 }}>[0.25ms] print(4) → OUTPUT: 4</p>
                  <p style={{ color: C.secondary, margin: 0, fontWeight: 600 }}>[0.28ms] ▶ Step {step} — Entering Node(6)...</p>
                </>
              )}
              {activeTab === 'watch' && (
                <>
                  <p style={{ color: C.onSurface, margin: 0 }}>node: TreeNode(val=6)</p>
                  <p style={{ color: C.onSurface, margin: 0 }}>node.left: TreeNode(val=5)</p>
                  <p style={{ color: C.onSurface, margin: 0 }}>node.right: TreeNode(val=7)</p>
                  <p style={{ color: C.primary, margin: 0 }}>stack_depth: 3</p>
                </>
              )}
              {activeTab === 'profiler' && (
                <>
                  <p style={{ color: C.textMuted, margin: 0 }}>Total calls: 7</p>
                  <p style={{ color: C.primary, margin: 0 }}>Avg call time: 0.04ms</p>
                  <p style={{ color: C.secondary, margin: 0 }}>Peak stack depth: 3</p>
                  <p style={{ color: C.textMuted, margin: 0 }}>Time complexity: O(n)</p>
                </>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 12px', backgroundColor: C.surfaceContainer, borderTop: `1px solid ${C.surfaceContainerHigh}`, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
            <span style={{ color: C.primary }}>●&nbsp;WASM Executing</span>
            <span style={{ color: C.textMuted }}>Line {step * 1 + 4}, Col 1</span>
            <span style={{ color: C.secondary }}>Python 3.12.2</span>
            <span style={{ color: C.textMuted }}>UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
