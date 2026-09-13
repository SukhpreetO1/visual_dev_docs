'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  SkipBack,
  SkipForward,
  RotateCcw,
  Zap,
  Terminal,
  Code2,
  GitBranch,
  Network,
  Container,
  Binary,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  ChevronRight,
  X,
  Check,
} from 'lucide-react';

// ─── Stitch Design Token shortcuts ───────────────────────────────────────────
const C = {
  surface: '#0b1326',
  surfaceInset: '#0B1120',
  surfaceCard: '#1E293B',
  surfaceContainerLowest: '#060e20',
  surfaceContainerLow: '#131b2e',
  surfaceContainer: '#171f33',
  surfaceContainerHigh: '#222a3d',
  surfaceContainerHighest: '#2d3449',
  surfaceBright: '#31394d',
  primary: '#68dba9',
  primaryFixed: '#85f8c4',
  primaryContainer: '#25a475',
  onPrimary: '#003825',
  secondary: '#ffb599',
  secondaryContainer: '#f66018',
  onSurface: '#dae2fd',
  onSurfaceVariant: '#bccac0',
  textHeading: '#F1F5F9',
  textMuted: '#94A3B8',
  error: '#ffb4ab',
  tertiary: '#ffb3ae',
};

export default function LandingPage() {
  const [activeStep] = useState(4);

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* ── HEADER NAV ── */}
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: C.surface + 'D9', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${C.surfaceContainerHigh}` }}>
        <div style={{ height: 80, maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              {/* VDD Logo SVG */}
              <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: C.surfaceContainerHigh, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="22" fill="#0B1326" />
                  <path d="M32 32L18 50L32 68" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="15" stroke="#059669" strokeWidth="5" />
                  <circle cx="50" cy="50" r="6" fill="#10B981" />
                  <path d="M68 32L82 50L68 68" stroke="#EA580C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700, color: C.textHeading, letterSpacing: '-0.02em' }}>Visual Dev Docs</span>
            </Link>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {['Docs & Topics', 'Interactive Roadmaps', 'Playground', 'Pricing', 'Community'].map(item => (
                <Link key={item} href="#" style={{ padding: '6px 12px', borderRadius: 8, color: C.onSurfaceVariant, fontSize: 14, fontWeight: 400, textDecoration: 'none' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = C.surfaceContainer; (e.target as HTMLElement).style.color = C.textHeading; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = C.onSurfaceVariant; }}>
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link href="/login" style={{ padding: '6px 16px', borderRadius: 8, backgroundColor: C.surfaceCard, color: C.onSurface, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
              Sign In
            </Link>
            <Link href="/register" style={{ padding: '6px 16px', borderRadius: 8, backgroundColor: C.primary, color: C.onPrimary, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 0 12px rgba(104,219,169,0.3)' }}>
              Start Learning Free
            </Link>
            <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>
              <span style={{ color: C.onPrimary, fontSize: 12, fontWeight: 700 }}>U</span>
            </div>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 80 }}>

        {/* ── HERO SECTION ── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Ambient glows */}
          <div style={{ position: 'absolute', top: -160, left: '50%', transform: 'translateX(-50%)', width: 720, height: 360, backgroundColor: 'rgba(104,219,169,0.08)', filter: 'blur(130px)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 320, left: -80, width: 420, height: 420, backgroundColor: 'rgba(246,96,24,0.06)', filter: 'blur(140px)', borderRadius: '50%', pointerEvents: 'none' }} />

          <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            {/* Eyebrow pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 9999, backgroundColor: C.surfaceContainer, marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block', animation: 'ping 1.5s infinite' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500, color: C.primary, letterSpacing: '0.04em' }}>Next-Gen Developer Learning • Live WASM Runtime</span>
            </div>

            {/* Main headline */}
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', color: C.textHeading, maxWidth: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Don&apos;t Just Read Code.<br />
              <span style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.primaryFixed}, ${C.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                See It Execute.
              </span>
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: 16, lineHeight: 1.7, color: C.onSurfaceVariant, maxWidth: 600, marginBottom: 32 }}>
              Master Programming, DSA, Git, DevOps, and System Design with real-time interactive execution visualizations, memory graph inspection, and context-aware AI.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, backgroundColor: C.primary, color: C.onPrimary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 0 24px rgba(104,219,169,0.35)' }}>
                <span>Explore Roadmaps</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="#workbench" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, backgroundColor: C.surfaceContainerHigh, color: C.secondary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                <Play size={18} />
                <span>Try Sandbox Playground</span>
              </Link>
            </div>

            {/* Metrics strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 700, width: '100%', marginBottom: 48 }}>
              {[
                { value: '45,000+', label: 'Engineers leveling up', color: C.textHeading },
                { value: '99.9%', label: 'WASM sandbox uptime', color: C.primary },
                { value: '120+', label: 'Interactive algorithms', color: C.secondary },
              ].map(m => (
                <div key={m.value} style={{ padding: '16px 12px', backgroundColor: `${C.surfaceContainer}99`, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 700, color: m.color }}>{m.value}</span>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{m.label}</span>
                </div>
              ))}
            </div>

            {/* ── WORKBENCH PREVIEW ── */}
            <div id="workbench" style={{ width: '100%', borderRadius: 16, overflow: 'hidden', backgroundColor: C.surfaceContainerLowest, boxShadow: '0 32px 64px rgba(0,0,0,0.6)' }}>
              {/* Window title bar */}
              <div style={{ backgroundColor: C.surfaceContainer, padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.error + 'CC', display: 'inline-block' }} />
                  <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.secondary + 'CC', display: 'inline-block' }} />
                  <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.primary + 'CC', display: 'inline-block' }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>binary_search_visualizer.ts • VDD WebAssembly Worker (Thread 0)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceInset, color: C.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                    <Zap size={12} /> WASM 60 FPS
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 8px', borderRadius: 4, backgroundColor: C.surfaceContainerHigh, color: C.onSurface, fontSize: 11 }}>
                    <Terminal size={12} /> Shell
                  </span>
                </div>
              </div>

              {/* Split editor + visualizer */}
              <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', minHeight: 500 }}>
                {/* Left: Code editor */}
                <div style={{ backgroundColor: C.surfaceInset, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 600, color: C.primary }}>binary_search.ts</span>
                        <span style={{ fontSize: 12, color: C.textMuted }}>Two-Pointer Step Tracer</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted }}>
                        <span>Target = 42</span>
                        <span style={{ padding: '2px 6px', borderRadius: 4, backgroundColor: C.surfaceContainer, color: C.onSurface }}>TypeScript 5.3</span>
                      </div>
                    </div>
                    <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, color: C.onSurface, overflowX: 'auto', margin: 0 }}>
                      <code>
{`\x1B[2m01\x1B[0m `}<span style={{ color: C.primary, fontWeight: 600 }}>function</span>{` `}<span style={{ color: C.primaryFixed }}>binarySearch</span>{`(arr: `}<span style={{ color: C.secondary }}>number[]</span>{`, target: `}<span style={{ color: C.secondary }}>number</span>{`): `}<span style={{ color: C.secondary }}>number</span>{` {`}
                      </code>
                    </pre>
                    {/* Code lines */}
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.7 }}>
                      {[
                        { n: '01', content: <><span style={{ color: C.primary, fontWeight: 600 }}>function</span> <span style={{ color: C.primaryFixed }}>binarySearch</span>(arr: <span style={{ color: C.secondary }}>number[]</span>, target: <span style={{ color: C.secondary }}>number</span>): <span style={{ color: C.secondary }}>number</span> {'{'}</>, bg: null },
                        { n: '02', content: <>&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>let</span> left = <span style={{ color: C.tertiary }}>0</span>;</>, bg: null },
                        { n: '03', content: <>&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>let</span> right = arr.<span style={{ color: C.onSurface }}>length</span> - <span style={{ color: C.tertiary }}>1</span>;</>, bg: null },
                        { n: '04', content: <></>, bg: null },
                        { n: '>5', content: <>&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>while</span> (left &lt;= right) {'{'}</>, bg: `${C.primary}22` },
                        { n: '>6', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>const</span> mid = Math.<span style={{ color: C.onSurface }}>floor</span>((left + right) / <span style={{ color: C.tertiary }}>2</span>);</>, bg: `${C.primary}3A` },
                        { n: '07', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.textMuted }}>// Current inspection: arr[mid] === 42</span></>, bg: null },
                        { n: '08', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>if</span> (arr[mid] === target) <span style={{ color: C.primary, fontWeight: 600 }}>return</span> mid;</>, bg: null },
                        { n: '09', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>if</span> (arr[mid] &lt; target) left = mid + <span style={{ color: C.tertiary }}>1</span>;</>, bg: null },
                        { n: '10', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>else</span> right = mid - <span style={{ color: C.tertiary }}>1</span>;</>, bg: null },
                        { n: '11', content: <>&nbsp;&nbsp;{'}'}</>, bg: null },
                        { n: '12', content: <>&nbsp;&nbsp;<span style={{ color: C.primary, fontWeight: 600 }}>return</span> -<span style={{ color: C.tertiary }}>1</span>;</>, bg: null },
                        { n: '13', content: <>{'}'}</>, bg: null },
                      ].map(({ n, content, bg }) => (
                        <div key={n} style={{ display: 'flex', padding: '1px 0', backgroundColor: bg || 'transparent', margin: bg ? '0 -20px' : undefined, paddingLeft: bg ? 20 : undefined, paddingRight: bg ? 20 : undefined }}>
                          <span style={{ color: n.startsWith('>') ? C.primary : C.textMuted, width: 28, flexShrink: 0, userSelect: 'none', fontSize: 13 }}>{n}</span>
                          <span>{content}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Playback toolbar */}
                  <div style={{ marginTop: 16, padding: '8px 12px', borderRadius: 8, backgroundColor: C.surfaceContainer, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <button style={{ padding: 6, borderRadius: 6, backgroundColor: 'transparent', border: 'none', color: C.onSurface, cursor: 'pointer' }}><SkipBack size={18} /></button>
                      <button style={{ padding: '4px 12px', borderRadius: 6, backgroundColor: C.secondaryContainer, border: 'none', color: C.onPrimary, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600 }}><Play size={14} /> Play</button>
                      <button style={{ padding: 6, borderRadius: 6, backgroundColor: 'transparent', border: 'none', color: C.onSurface, cursor: 'pointer' }}><SkipForward size={18} /></button>
                      <button style={{ padding: 6, borderRadius: 6, backgroundColor: 'transparent', border: 'none', color: C.textMuted, cursor: 'pointer' }}><RotateCcw size={16} /></button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted }}>
                      <span style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceInset, color: C.primary }}>Speed: 1.0x</span>
                      <span>Step <span style={{ color: C.primary, fontWeight: 700 }}>04</span> / 07</span>
                    </div>
                  </div>
                </div>

                {/* Right: Memory visualizer */}
                <div style={{ backgroundColor: C.surfaceContainerLow, padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Memory array */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Memory Array Space</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary }}>arr[6] elements</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      {/* Index row */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', width: '100%', textAlign: 'center', marginBottom: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                        {['0', '1', '2', 'L=3', 'M=4', '5', 'R=6'].map((l, i) => (
                          <div key={l} style={{ color: i === 3 ? C.primary : i === 4 ? C.secondary : i === 6 ? C.tertiary : C.textMuted, fontWeight: [3, 4, 6].includes(i) ? 700 : 400 }}>{l}</div>
                        ))}
                      </div>
                      {/* Value cells */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, width: '100%' }}>
                        {[
                          { v: '04', style: { backgroundColor: C.surfaceContainer, color: C.textMuted, opacity: 0.4 } },
                          { v: '11', style: { backgroundColor: C.surfaceContainer, color: C.textMuted, opacity: 0.4 } },
                          { v: '19', style: { backgroundColor: C.surfaceContainer, color: C.textMuted, opacity: 0.4 } },
                          { v: '28', style: { backgroundColor: `${C.primaryContainer}66`, color: C.primary, fontWeight: 600, boxShadow: '0 0 12px rgba(104,219,169,0.3)' } },
                          { v: '42', style: { backgroundColor: C.secondaryContainer, color: '#fff', fontWeight: 700, boxShadow: '0 0 16px rgba(246,96,24,0.4)', transform: 'translateY(-4px)' } },
                          { v: '57', style: { backgroundColor: C.surfaceContainer, color: C.onSurface } },
                          { v: '89', style: { backgroundColor: C.surfaceContainerHigh, color: C.tertiary } },
                        ].map(({ v, style }) => (
                          <div key={v} style={{ height: 48, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, transition: 'transform 300ms', ...style }}>{v}</div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.textMuted, padding: '0 4px' }}>
                        <span>Low Search Space</span>
                        <span style={{ color: C.secondary, fontWeight: 600 }}>Matched Target 42!</span>
                        <span>High Space</span>
                      </div>
                    </div>
                  </div>

                  {/* Call stack & heap */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {[
                      {
                        title: 'Call Stack Frame',
                        lines: [
                          { text: '▶ binarySearch(arr, 42)', color: C.primary, bold: true },
                          { text: '↳ anonymous execution', color: C.textMuted, indent: true },
                          { text: '↳ event_loop_tick()', color: C.textMuted, indent: true },
                        ],
                      },
                      {
                        title: 'Heap Registry',
                        lines: [
                          { text: 'ptr_0x7f2: Int32Array[7]', color: C.onSurface },
                          { text: 'mid_val: 42', color: C.secondary },
                          { text: 'complexity: O(log n)', color: C.primary },
                        ],
                      },
                    ].map(({ title, lines }) => (
                      <div key={title} style={{ backgroundColor: C.surfaceInset, padding: 10, borderRadius: 8 }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.textMuted, display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {lines.map((l: { text: string; color: string; bold?: boolean; indent?: boolean }) => (
                            <span key={l.text} style={{ color: l.color, fontWeight: l.bold ? 600 : 400, paddingLeft: l.indent ? 12 : 0 }}>{l.text}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Execution stream terminal */}
                  <div style={{ backgroundColor: C.surfaceInset, padding: 10, borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, lineHeight: 1.7 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.textMuted, marginBottom: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
                      <span>Execution Stream</span>
                    </div>
                    <p style={{ color: C.textMuted, margin: 0 }}>[0.02ms] VM instantiated memory at 0x00A40</p>
                    <p style={{ color: C.onSurface, margin: 0 }}>[0.06ms] left=3, right=6 → mid = 4 (arr[4] == 42)</p>
                    <p style={{ color: C.primary, fontWeight: 600, margin: 0 }}>[0.11ms] &gt;&gt; Step 4: arr[mid] === target MATCHED. Returning index 4.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── DOMAIN EXPLORER GRID ── */}
        <section id="pathways" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Binary size={18} style={{ color: C.primary }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Structured Pathways</span>
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 32, fontWeight: 700, color: C.textHeading, letterSpacing: '-0.02em', margin: 0 }}>From Syntax to Distributed Systems</h2>
            </div>
            <p style={{ fontSize: 14, color: C.onSurfaceVariant, maxWidth: 380, margin: 0 }}>
              Deep dive into language runtimes, algorithms, and infrastructure through step-by-step interactive diagrams instead of static text blocks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: <Code2 size={28} />, title: 'JavaScript & TypeScript', topics: '42 Interactive Topics • Beginner to Pro', level: 'Beginner → Pro', preview: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}><div style={{ padding: '6px 8px', borderRadius: 4, backgroundColor: C.surfaceContainer, fontSize: 10 }}><div style={{ color: C.textMuted }}>Call Stack</div><div style={{ color: C.primary, fontWeight: 700 }}>fetchData()</div></div><span style={{ color: C.secondary }}>→ microtask →</span><div style={{ padding: '6px 8px', borderRadius: 4, backgroundColor: C.surfaceContainer, fontSize: 10 }}><div style={{ color: C.textMuted }}>Promise Queue</div><div style={{ color: C.secondary, fontWeight: 700 }}>.then()</div></div></div>, iconColor: C.primary },
              { icon: <Binary size={28} />, title: 'Python Runtime & Memory', topics: '38 Interactive Topics • All Levels', level: 'Beginner', preview: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}><div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: C.secondary, display: 'inline-block' }} /><span style={{ color: C.onSurface }}>PyObject {'{'} refcount: 3 {'}'}</span></div><span style={{ padding: '2px 6px', borderRadius: 4, backgroundColor: C.surfaceContainer, color: C.primary, fontSize: 10 }}>GIL Active</span></div>, iconColor: C.secondary },
              { icon: <GitBranch size={28} />, title: 'Go (Golang) Concurrency', topics: '29 Interactive Topics • Intermediate', level: 'Intermediate', preview: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}><span style={{ padding: '2px 6px', borderRadius: 4, backgroundColor: C.surfaceContainer, color: C.primary }}>go worker()</span><span style={{ color: C.textMuted }}>•••{'>'} [chan int] •••{'>'}</span><span style={{ padding: '2px 6px', borderRadius: 4, backgroundColor: C.surfaceContainer, color: C.secondary }}>{'select {}'}</span></div>, iconColor: C.primary },
              { icon: <BrainCircuit size={28} />, title: 'Data Structures & Algorithms', topics: '64 Interactive Topics • Advanced Level', level: 'Advanced', preview: <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><svg viewBox="0 0 100 50" width={80} height={40}><circle cx="50" cy="10" r="8" fill="#171f33" stroke={C.primary} strokeWidth="2" /><circle cx="25" cy="40" r="8" fill="#171f33" stroke={C.secondary} strokeWidth="2" /><circle cx="75" cy="40" r="8" fill={C.primaryContainer} stroke={C.primary} strokeWidth="2" /><line x1="44" y1="16" x2="31" y2="34" stroke="#87948b" strokeWidth="1.5" /><line x1="56" y1="16" x2="69" y2="34" stroke={C.primary} strokeWidth="2" /></svg><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}><div style={{ color: C.textHeading }}>AVL Self-Balancing Tree</div><div style={{ color: C.textMuted }}>Left-Right Rotation active • Height delta = 0</div></div></div>, iconColor: C.secondary, span: 2 },
              { icon: <GitBranch size={28} />, title: 'Git Internals & Branching', topics: '25 Interactive Topics • All Levels', level: 'All Levels', preview: <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}><span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} /><span style={{ width: 16, height: 2, backgroundColor: `${C.primary}99`, display: 'inline-block' }} /><span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.secondary, display: 'inline-block' }} /><span style={{ width: 16, height: 2, backgroundColor: `${C.secondary}99`, display: 'inline-block' }} /><span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.tertiary, display: 'inline-block' }} /><span style={{ marginLeft: 'auto', color: C.textMuted }}>rebase -i HEAD~3</span></div>, iconColor: C.primary },
              { icon: <Container size={28} />, title: 'DevOps & Docker Internals', topics: '34 Interactive Topics • Intermediate', level: 'Intermediate', preview: <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}><div style={{ display: 'flex', justifyContent: 'space-between', color: C.textMuted, marginBottom: 4 }}><span>Layer 3 (OverlayFS)</span><span style={{ color: C.primary, fontWeight: 700 }}>rw_state</span></div><div style={{ width: '100%', height: 6, borderRadius: 9999, backgroundColor: C.surfaceContainer, overflow: 'hidden' }}><div style={{ width: '75%', height: '100%', backgroundColor: C.primary, borderRadius: 9999 }} /></div></div>, iconColor: C.secondary },
              { icon: <Network size={28} />, title: 'System Design & Microservices', topics: '31 Interactive Topics • Advanced Architecture', level: 'Advanced', preview: <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, fontSize: 11, textAlign: 'center', fontFamily: "'JetBrains Mono', monospace" }}>{[{ label: 'Ingress LB', value: 'Round Robin', color: C.primary }, { label: 'Sharding Ring', value: 'Hash(ID)%N', color: C.secondary }, { label: 'Cache Layer', value: 'Write-Through', color: C.tertiary }].map(x => <div key={x.label} style={{ padding: '6px 4px', borderRadius: 4, backgroundColor: C.surfaceContainer }}><div style={{ color: C.textMuted, fontSize: 10 }}>{x.label}</div><div style={{ color: x.color, fontWeight: 600 }}>{x.value}</div></div>)}</div>, iconColor: C.primary, span: 2 },
            ].map((domain) => (
              <div key={domain.title} style={{ backgroundColor: C.surfaceCard, padding: 20, borderRadius: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridColumn: domain.span ? `span ${domain.span}` : undefined, transition: 'background-color 200ms' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: C.surfaceContainer, display: 'flex', alignItems: 'center', justifyContent: 'center', color: domain.iconColor }}>{domain.icon}</div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 9999, backgroundColor: `${C.primary}1A`, color: C.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} /> Interactive Viz Inside
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 600, color: C.textHeading, margin: '0 0 4px' }}>{domain.title}</h3>
                  <p style={{ fontSize: 12, color: C.onSurfaceVariant, margin: '0 0 12px' }}>{domain.topics}</p>
                  <div style={{ padding: '10px 12px', borderRadius: 8, backgroundColor: C.surfaceInset }}>{domain.preview}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, marginTop: 12 }}>
                  <span style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceContainer, color: C.textMuted, fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{domain.level}</span>
                  <Link href="/learn/dsa/binary-search" style={{ fontSize: 14, color: C.primary, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>Explore Track <ChevronRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PARADIGM SHIFT SECTION ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.secondary, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Before vs. After</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 32, fontWeight: 700, color: C.textHeading, letterSpacing: '-0.02em', margin: '4px 0 8px' }}>The Paradigm Shift in Tech Documentation</h2>
            <p style={{ fontSize: 14, color: C.onSurfaceVariant }}>Why modern engineering teams replace copy-paste text tutorials with interactive visual runtimes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {/* Old way */}
            <div style={{ backgroundColor: C.surfaceContainerLow, padding: 32, borderRadius: 24, opacity: 0.85 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: C.textMuted, marginBottom: 12 }}>
                <XCircle size={22} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 600 }}>Traditional Static Docs</span>
              </div>
              <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 20 }}>Outdated API manuals, plain Markdown walls, and disconnected terminal setups.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Static unexecutable code snippets with zero feedback.', 'Mental gymnastics to track variables across recursive calls.', '30-minute local environment setup just to run a hello-world snippet.', 'Generic, stale community forum answers for runtime bugs.'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 8, fontSize: 14, color: C.textMuted }}>
                    <X size={16} style={{ color: C.error, flexShrink: 0, marginTop: 2 }} /> {t}
                  </li>
                ))}
              </ul>
              <div style={{ padding: 12, borderRadius: 12, backgroundColor: C.surfaceInset, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.textMuted }}>
                <span style={{ color: C.error, fontWeight: 600 }}>{'// Error: ReferenceError: memory state is invisible'}</span><br />
                {'>'} Reading 4,000 words without a single visual anchor...
              </div>
            </div>
            {/* New way */}
            <div style={{ backgroundColor: C.surfaceCard, padding: 32, borderRadius: 24, position: 'relative', boxShadow: `0 0 40px rgba(104,219,169,0.07)` }}>
              <div style={{ position: 'absolute', top: -14, right: 24, padding: '4px 12px', borderRadius: 9999, backgroundColor: C.primary, color: C.onPrimary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700 }}>MODERN STANDARD</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: C.primary, marginBottom: 12 }}>
                <CheckCircle2 size={22} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 600, color: C.textHeading }}>Visual Dev Docs</span>
              </div>
              <p style={{ fontSize: 14, color: C.onSurface, marginBottom: 20 }}>High-density interactive workbench with live in-browser execution engines.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { t: <><strong>Live WebAssembly Runtime:</strong> Run C++, Rust, Python, Go, and JS instantly in sandbox.</> },
                  { t: <><strong>Visual Memory Inspector:</strong> Watch the stack, heap, and pointers animate step-by-step.</> },
                  { t: <><strong>AI Code Explainer:</strong> Context-aware assistant transforms logic into instant interactive diagrams.</> },
                  { t: <><strong>Dynamic Complexity Engine:</strong> Live Big-O charts that benchmark code with varying input sizes.</> },
                ].map((x, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, fontSize: 14, color: C.onSurface }}>
                    <Check size={16} style={{ color: C.primary, flexShrink: 0, marginTop: 2 }} /> {x.t}
                  </li>
                ))}
              </ul>
              <div style={{ padding: 12, borderRadius: 12, backgroundColor: C.surfaceInset, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: C.primary }}>{'>'} WASM Engine: Execution successful in 0.08ms</span>
                <span style={{ color: C.secondary, fontWeight: 600 }}>100% Comprehension</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section id="pricing" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Investment in Mastery</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 32, fontWeight: 700, color: C.textHeading, letterSpacing: '-0.02em', margin: '4px 0 8px' }}>Flexible Learning For Every Engineer</h2>
            <p style={{ fontSize: 14, color: C.onSurfaceVariant }}>Start free with community playgrounds, upgrade when you want deep architectural visualizers and limitless AI.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 900, margin: '0 auto' }}>
            {/* Free */}
            <div style={{ backgroundColor: C.surfaceCard, padding: 32, borderRadius: 24, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: C.textHeading, margin: 0 }}>Community Explorer</h3>
                <span style={{ padding: '4px 10px', borderRadius: 9999, backgroundColor: C.surfaceContainer, color: C.textMuted, fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>Free Forever</span>
              </div>
              <p style={{ fontSize: 12, color: C.onSurfaceVariant, marginBottom: 20 }}>Perfect for self-taught developers starting their algorithmic journey.</p>
              <div style={{ marginBottom: 24 }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: C.textHeading }}>$0</span><span style={{ color: C.textMuted }}> / month</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {['All Core Language Documentation (JS, Py, Go)', 'Standard Browser WASM Playgrounds', '10 AI Code Explanations per day', 'Community Roadmaps & Curated Tracks', 'Public Developer Forum Access'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 8, fontSize: 14, color: C.onSurface }}><Check size={16} style={{ color: C.primary, flexShrink: 0 }} />{t}</li>
                ))}
              </ul>
              <Link href="/register" style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: 12, backgroundColor: C.surfaceContainerHigh, color: C.onSurface, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Get Started Free</Link>
            </div>
            {/* Pro */}
            <div style={{ backgroundColor: C.surfaceCard, padding: 32, borderRadius: 24, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 0 48px rgba(246,96,24,0.12)' }}>
              <div style={{ position: 'absolute', top: -14, right: 32, padding: '4px 16px', borderRadius: 9999, backgroundColor: C.secondaryContainer, color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, boxShadow: '0 0 16px rgba(246,96,24,0.4)' }}>MOST POPULAR</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: C.textHeading, margin: 0 }}>Systems Architect Pro</h3>
                <span style={{ padding: '4px 10px', borderRadius: 9999, backgroundColor: `${C.secondaryContainer}33`, color: C.secondary, fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>All-Access</span>
              </div>
              <p style={{ fontSize: 12, color: C.onSurfaceVariant, marginBottom: 20 }}>For software engineers preparing for L5/L6 interviews and microservice mastery.</p>
              <div style={{ marginBottom: 24, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: C.secondary }}>$16</span>
                <span style={{ color: C.textMuted }}> / month</span>
                <span style={{ fontSize: 12, color: C.textMuted }}>or $149 billed yearly (Save 22%)</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {['Unlimited AI Explainer: Contextual logic diagrams on demand', 'Server-Side Sandboxes: Full Go, Rust, and Docker cluster runtimes', 'Distributed Simulators: Kafka event streaming & cache partitioning', 'Downloadable Visual Cheatsheets: Vector SVG & PDF diagrams', 'Priority Discord Channel & Architect Review Hours'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 8, fontSize: 14, color: C.onSurface }}><CheckCircle2 size={16} style={{ color: C.secondary, flexShrink: 0 }} />{t}</li>
                ))}
              </ul>
              <Link href="/register" style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: 12, backgroundColor: C.secondaryContainer, color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Unlock Full Access</Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: C.textHeading, letterSpacing: '-0.02em', marginBottom: 24 }}>Ready to see your code come to life?</h2>
          <p style={{ fontSize: 16, color: C.onSurfaceVariant, marginBottom: 32 }}>Join thousands of developers using Visual Dev Docs as an interactive visual playground.</p>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 12, backgroundColor: C.primary, color: C.onPrimary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 0 32px rgba(104,219,169,0.35)' }}>
            🚀 Launch Visual Sandbox Now
          </Link>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `1px solid ${C.surfaceContainerHigh}`, padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1280, margin: '0 auto', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: C.textHeading }}>Visual Dev Docs</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Documentation', 'Roadmaps', 'Sandbox IDE', 'GitHub'].map(l => (
              <Link key={l} href="#" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
          <span style={{ fontSize: 12, color: C.textMuted }}>© 2025 Visual Dev Docs. Engineered for modern systems architects & developers.</span>
        </footer>

      </main>
    </div>
  );
}
