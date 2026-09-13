'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingUp, Zap, Play, ArrowRight, BookOpen, Map, Network, GitBranch } from 'lucide-react';

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
  primaryFixed: '#85f8c4',
  primaryContainer: '#25a475',
  onPrimary: '#003825',
  onPrimaryContainer: '#00311f',
  secondary: '#ffb599',
  secondaryContainer: '#f66018',
  onSurface: '#dae2fd',
  onSurfaceVariant: '#bccac0',
  textHeading: '#F1F5F9',
  textMuted: '#94A3B8',
  outline: '#87948b',
  outlineVariant: '#3d4a42',
};

// Days for streak heatmap
const streakDays = [
  { d: 'S', active: false }, { d: 'M', active: true }, { d: 'T', active: true },
  { d: 'W', active: true }, { d: 'T', active: false }, { d: 'F', active: true },
  { d: 'S', active: true }, { d: 'S', active: false }, { d: 'M', active: true },
  { d: 'T', active: true }, { d: 'W', active: true }, { d: 'T', active: true },
  { d: 'F', active: true }, { d: 'S', active: false },
];

const recommendedRoadmaps = [
  { icon: <GitBranch size={22} />, title: 'Git Internals & History Rewriting', level: 'Advanced', progress: 42, color: C.primary },
  { icon: <Network size={22} />, title: 'Microservices & Distributed Cache', level: 'Expert', progress: 18, color: C.secondary },
  { icon: <BookOpen size={22} />, title: 'Rust Memory & Ownership Model', level: 'Intermediate', progress: 67, color: C.primary },
  { icon: <Map size={22} />, title: 'DevOps & Kubernetes Internals', level: 'Advanced', progress: 31, color: C.secondaryContainer },
];

export default function DashboardPage() {
  return (
    <div style={{ width: '100%', padding: '24px', display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* ── SECTION 1: WELCOME BANNER ── */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderRadius: 16, backgroundColor: C.surfaceContainerLow, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', flexWrap: 'wrap', gap: 16 }}>
        {/* Ambient glows */}
        <div style={{ position: 'absolute', top: -48, left: -48, width: 256, height: 256, backgroundColor: `${C.primary}1A`, borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -48, right: 96, width: 288, height: 288, backgroundColor: `${C.secondaryContainer}1A`, borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

        {/* Left: Greeting */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 32, fontWeight: 700, color: C.textHeading, margin: 0, letterSpacing: '-0.02em' }}>Welcome back, Sukhpreet!</h1>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 9999, backgroundColor: C.surfaceContainerHighest, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.secondary, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              🔥 <strong style={{ color: C.textHeading }}>7 Day</strong> Learning Streak
            </span>
          </div>
          <p style={{ fontSize: 14, color: C.textMuted, margin: 0 }}>
            Here&apos;s what happened while you were away. You&apos;re <span style={{ color: C.primary, fontWeight: 600 }}>3 lessons away</span> from completing your Weekly Target.
          </p>
        </div>

        {/* Right: Plan + Upgrade */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 8, backgroundColor: C.surfaceInset }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.outlineVariant, display: 'inline-block' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 500 }}>Free Tier</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: C.outline }}>7/10 slots</span>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 8, backgroundColor: C.secondaryContainer, border: 'none', color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 18px rgba(246,96,24,0.35)' }}>
            <Zap size={18} style={{ color: C.secondary }} />
            Upgrade to Premium
          </button>
        </div>
      </section>

      {/* ── SECTION 2: CURRENT ACTIVE LESSON ── */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.textMuted, fontWeight: 600 }}>Current Active Runtime Lesson</span>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.outline, fontWeight: 500 }}>Step 7 / 10 Active Session</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 24, padding: '24px', borderRadius: 16, backgroundColor: C.surfaceCard, boxShadow: '0 8px 32px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
          {/* Emerald glow */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: 384, height: 384, backgroundColor: `${C.primary}0D`, borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

          {/* Left: content + controls */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16, position: 'relative', zIndex: 10 }}>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                {[
                  { t: 'Python Runtime & Concurrency', bg: `${C.primary}26`, color: C.primary },
                  { t: 'AsyncIO Core', bg: C.surfaceInset, color: C.onSurfaceVariant },
                  { t: 'WASM Viz Node #14', bg: C.surfaceInset, color: C.secondary },
                ].map(({ t, bg, color }) => (
                  <span key={t} style={{ padding: '2px 10px', borderRadius: 9999, backgroundColor: bg, color, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 600, color: C.textHeading, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                Python AsyncIO Event Loop & Coroutine Scheduling
              </h2>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>
                Deep dive into cooperative multitasking, selector mechanics, and how epoll/kqueue transitions coroutine handles into the microtask queue without blocking kernel threads.
              </p>
            </div>

            {/* Progress bar */}
            <div style={{ padding: '12px 16px', borderRadius: 8, backgroundColor: C.surfaceInset }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginBottom: 8 }}>
                <span>Module Completion: <strong style={{ color: C.primary }}>70%</strong> (Step 7 of 10)</span>
                <span style={{ color: C.secondary, display: 'flex', alignItems: 'center', gap: 4 }}>⏱ Est. 8 mins left</span>
              </div>
              {/* Segmented progress */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 4, height: 8 }}>
                {[...Array(10)].map((_, i) => (
                  <div key={i} style={{ borderRadius: 2, backgroundColor: i < 7 ? C.primary : C.surfaceContainerHigh, boxShadow: i < 7 ? '0 0 8px rgba(104,219,169,0.5)' : 'none' }} />
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link href="/learn/python/asyncio" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 24px', borderRadius: 8, backgroundColor: C.primary, color: C.onPrimary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 0 18px rgba(104,219,169,0.35)', transition: 'transform 200ms' }}>
                <Play size={18} />
                Resume Playground →
              </Link>
              <button style={{ padding: '10px 20px', borderRadius: 8, backgroundColor: C.surfaceContainerHigh, border: 'none', color: C.onSurface, fontSize: 14, cursor: 'pointer' }}>
                Review Previous Steps
              </button>
            </div>
          </div>

          {/* Right: Event loop SVG */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', borderRadius: 12, backgroundColor: C.surfaceInset, position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.secondary, display: 'inline-block' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, color: C.textHeading, textTransform: 'uppercase' }}>Live Event Loop State Machine</span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary }}>POLL: ACTIVE</span>
            </div>

            <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxHeight: 192 }}>
              {/* Outer ring */}
              <circle cx="190" cy="100" r="72" stroke="#2d3449" strokeDasharray="6 6" strokeWidth="2" />
              <circle cx="190" cy="100" r="72" stroke="#68dba9" strokeDasharray="80 180" strokeWidth="2" />
              {/* Center */}
              <circle cx="190" cy="100" r="28" fill="#171F33" />
              <text fill="#F1F5F9" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" textAnchor="middle" x="190" y="98">ASYNCIO</text>
              <text fill="#68DBA9" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="190" y="110">epoll()</text>
              {/* Nodes */}
              <rect fill="#131B2E" height="42" rx="6" width="94" x="18" y="24" />
              <text fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x="65" y="42">Call Stack</text>
              <text fill="#F1F5F9" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="65" y="55">fetch_user()</text>
              <rect fill="#131B2E" height="42" rx="6" width="94" x="268" y="24" />
              <text fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x="315" y="42">Task Ready</text>
              <text fill="#68DBA9" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="315" y="55">coro_worker#2</text>
              <rect fill="#131B2E" height="42" rx="6" width="94" x="268" y="134" />
              <text fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x="315" y="152">Future Heap</text>
              <text fill="#FFB599" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="315" y="165">tcp_sock: PENDING</text>
              <rect fill="#131B2E" height="42" rx="6" width="94" x="18" y="134" />
              <text fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x="65" y="152">Timers Queue</text>
              <text fill="#BCCAC0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="65" y="165">sleep(0.05)</text>
              {/* Arrows */}
              <path d="M 112 45 L 145 75" stroke="#68DBA9" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M 235 75 L 268 45" stroke="#68DBA9" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M 268 155 L 235 125" stroke="#F66018" strokeDasharray="3 3" strokeWidth="1.5" />
              <path d="M 145 125 L 112 155" stroke="#87948B" strokeWidth="1.5" />
              <circle cx="145" cy="75" fill="#68DBA9" r="4" />
              <circle cx="145" cy="75" opacity="0.5" r="8" stroke="#68DBA9" strokeWidth="1" />
            </svg>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderRadius: 8, backgroundColor: C.surfaceContainerLow, fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
              <span style={{ color: C.onSurface }}><span style={{ color: C.primary, fontWeight: 700 }}>●</span> tasks: 3 queued</span>
              <span style={{ color: C.secondary, fontWeight: 700 }}>io_wait: 1.2ms</span>
              <span style={{ color: C.textMuted }}>ticks: 14,920</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: METRICS + STREAK ── */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {/* Card 1: Lessons */}
        <div style={{ padding: '24px', borderRadius: 16, backgroundColor: C.surfaceCard, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Total Completed Lessons</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 9999, backgroundColor: `${C.primary}26`, color: C.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
              <TrendingUp size={12} /> +4 this week
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: C.textHeading }}>24</span>
            <span style={{ fontSize: 14, color: C.textMuted }}>/ 86 modules</span>
          </div>
          <p style={{ fontSize: 12, color: C.textMuted, margin: '0 0 16px' }}>Across 4 active roadmaps: DSA, Cloud DevOps, Git Internals & Python Core.</p>
          {/* Bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 4, height: 56 }}>
            {[24, 32, 48, 20, 56, 28, 40].map((h, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', backgroundColor: [2, 4].includes(i) ? C.primary : C.surfaceContainerHigh, borderRadius: '2px 2px 0 0', height: h, boxShadow: [2, 4].includes(i) ? '0 0 8px rgba(104,219,169,0.3)' : 'none', transition: 'height 300ms' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: [2, 4].includes(i) ? C.primary : C.outline, fontWeight: [2, 4].includes(i) ? 700 : 400 }}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Executions */}
        <div style={{ padding: '24px', borderRadius: 16, backgroundColor: C.surfaceCard, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, display: 'block', marginBottom: 8 }}>Interactive Viz Executions</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: C.textHeading }}>312</span>
            <span style={{ fontSize: 14, color: C.textMuted }}>total runs</span>
          </div>
          <p style={{ fontSize: 12, color: C.textMuted, margin: '0 0 16px' }}>Across DSA, Git internals, and memory pointer visualizations.</p>
          {/* Circular indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <svg viewBox="0 0 100 100" style={{ width: 100, height: 100 }}>
              <circle cx="50" cy="50" r="42" fill="none" stroke={C.surfaceContainerHigh} strokeWidth="8" />
              <circle cx="50" cy="50" r="42" fill="none" stroke={C.secondaryContainer} strokeWidth="8" strokeDasharray={`${264 * 0.72} 264`} strokeLinecap="round" transform="rotate(-90 50 50)" />
              <text fill={C.textHeading} fontFamily="Plus Jakarta Sans" fontSize="14" fontWeight="700" textAnchor="middle" x="50" y="48">72%</text>
              <text fill={C.textMuted} fontFamily="Inter" fontSize="8" textAnchor="middle" x="50" y="62">Goal Reached</text>
            </svg>
          </div>
        </div>

        {/* Card 3: Streak */}
        <div style={{ padding: '24px', borderRadius: 16, backgroundColor: C.surfaceCard, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Streak Consistency Matrix</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.secondary }}>🔥 7 Day Active</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: C.textHeading }}>7</span>
            <span style={{ fontSize: 14, color: C.textMuted }}>consecutive days</span>
          </div>
          {/* 14-day heatmap */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {streakDays.map(({ d, active }, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: active ? `${C.primary}CC` : C.surfaceContainerHigh, boxShadow: active ? '0 0 8px rgba(104,219,169,0.3)' : 'none' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: active ? C.primary : C.outline }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: RECOMMENDED ROADMAPS ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 700, color: C.textHeading, margin: 0 }}>Recommended Next Roadmaps</h2>
          <Link href="/roadmap/devops" style={{ fontSize: 14, color: C.primary, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            Browse All <ArrowRight size={14} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {recommendedRoadmaps.map(({ icon, title, level, progress, color }) => (
            <div key={title} style={{ padding: '20px', borderRadius: 16, backgroundColor: C.surfaceCard, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.surfaceContainer, display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
                {icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: C.textHeading, margin: '0 0 4px' }}>{title}</h3>
                <span style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: C.surfaceContainerHigh, color: C.textMuted, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{level}</span>
              </div>
              {/* Progress */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginBottom: 6 }}>
                  <span>Progress</span>
                  <span style={{ color }}>{progress}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 9999, backgroundColor: C.surfaceContainerHigh, overflow: 'hidden' }}>
                  <div style={{ width: `${progress}%`, height: '100%', backgroundColor: color, borderRadius: 9999, boxShadow: `0 0 8px ${color}66` }} />
                </div>
              </div>
              <Link href={`/roadmap/${title.toLowerCase().replace(/\s+/g, '-')}`} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color, fontWeight: 600, textDecoration: 'none' }}>
                Continue Track <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
