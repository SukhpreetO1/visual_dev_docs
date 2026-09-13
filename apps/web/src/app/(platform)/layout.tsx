'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Map, Terminal, PlayCircle, Search } from 'lucide-react';

const C = {
  surface: '#0b1326',
  surfaceInset: '#0B1120',
  surfaceCard: '#1E293B',
  surfaceContainerLow: '#131b2e',
  surfaceContainer: '#171f33',
  surfaceContainerHigh: '#222a3d',
  primary: '#68dba9',
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
};

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard Overview', href: '/dashboard', key: 'dashboard' },
  { icon: BookOpen, label: 'Docs & Topics', href: '/learn/dsa/binary-search', key: 'learn' },
  { icon: Map, label: 'Interactive Roadmaps', href: '/roadmap/devops', key: 'roadmap' },
  { icon: Terminal, label: 'Cheat Sheets', href: '/cheatsheet/git', key: 'cheatsheet' },
  { icon: PlayCircle, label: 'Node Playground', href: '/learn/js/event-loop', key: 'playground' },
];

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (key: string) => {
    if (key === 'dashboard') return pathname === '/dashboard';
    return pathname.startsWith(`/${key}`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: C.surface,
        color: C.onSurface,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── FIXED HEADER ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: `${C.surface}CC`,
          backdropFilter: 'blur(20px)',
          boxShadow: '0 1px 8px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            height: 64,
            width: '100%',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {/* Left: Logo + nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link
              href="/dashboard"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: C.surfaceContainerHigh,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="22" fill="#0B1326" />
                  <path
                    d="M32 32L18 50L32 68"
                    stroke="#059669"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="50" r="15" stroke="#059669" strokeWidth="5" />
                  <circle cx="50" cy="50" r="6" fill="#10B981" />
                  <path
                    d="M68 32L82 50L68 68"
                    stroke="#EA580C"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.textHeading,
                  letterSpacing: '-0.02em',
                }}
              >
                Visual Dev Docs
              </span>
            </Link>

            {/* Top nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {[
                { label: 'Dashboard', href: '/dashboard', key: 'dashboard' },
                { label: 'Docs & Topics', href: '/learn/dsa/binary-search', key: 'learn' },
                { label: 'Roadmaps', href: '/roadmap/devops', key: 'roadmap' },
                { label: 'Cheat Sheets', href: '/cheatsheet/git', key: 'cheatsheet' },
                { label: 'Playground', href: '/learn/js/event-loop', key: 'playground' },
              ].map(({ label, href, key }) => {
                const active = isActive(key);
                return (
                  <Link
                    key={key}
                    href={href}
                    style={{
                      padding: '4px 16px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      fontSize: 14,
                      fontWeight: active ? 600 : 400,
                      backgroundColor: active ? C.primaryContainer : 'transparent',
                      color: active ? C.onPrimaryContainer : C.onSurfaceVariant,
                      boxShadow: active ? '0 0 12px rgba(37,164,117,0.35)' : 'none',
                      transition: 'all 150ms',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: search + user */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Search box */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search
                size={16}
                style={{ position: 'absolute', left: 10, color: C.outline, pointerEvents: 'none' }}
              />
              <input
                type="text"
                placeholder="Search documentation..."
                style={{
                  width: 240,
                  backgroundColor: C.surfaceInset,
                  color: C.onSurface,
                  fontSize: 13,
                  fontFamily: "'Inter', sans-serif",
                  padding: '6px 36px 6px 32px',
                  borderRadius: 8,
                  border: 'none',
                  outline: 'none',
                }}
              />
              <kbd
                style={{
                  position: 'absolute',
                  right: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.outline,
                  backgroundColor: C.surfaceContainer,
                  padding: '2px 4px',
                  borderRadius: 4,
                }}
              >
                ⌘K
              </kbd>
            </div>

            {/* User */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    color: C.textHeading,
                    lineHeight: 1.2,
                  }}
                >
                  Sukhpreet
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: C.primary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  PRO DEV
                </div>
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: C.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: C.onPrimary, fontSize: 14, fontWeight: 700 }}>S</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── FIXED LEFT SIDEBAR ── */}
      <aside
        style={{
          position: 'fixed',
          left: 0,
          top: 64,
          bottom: 0,
          width: 256,
          backgroundColor: `${C.surfaceContainerLow}E6`,
          backdropFilter: 'blur(20px)',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px 8px',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ padding: '0 8px', marginBottom: 4 }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: C.outline,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Workspace Nav
            </span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navItems.map(({ icon: Icon, label, href, key }) => {
              const active = isActive(key);
              return (
                <Link
                  key={key}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 12px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: 14,
                    backgroundColor: active ? C.primaryContainer : 'transparent',
                    color: active ? C.onPrimaryContainer : C.onSurfaceVariant,
                    fontWeight: active ? 600 : 400,
                    boxShadow: active ? '0 0 12px rgba(37,164,117,0.35)' : 'none',
                    transition: 'all 150ms',
                  }}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Version badge */}
        <div
          style={{
            padding: '8px 12px',
            borderRadius: 12,
            backgroundColor: `${C.surfaceInset}CC`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: C.primary,
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: C.onSurfaceVariant,
              }}
            >
              v2.4.0-edge
            </span>
          </div>
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.outline }}
          >
            Node Ready
          </span>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <main
        style={{ paddingLeft: 256, paddingTop: 64, minHeight: '100vh', backgroundColor: C.surface }}
      >
        {children}
      </main>
    </div>
  );
}
