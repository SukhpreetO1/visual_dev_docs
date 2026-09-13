'use client';

import React, { useState } from 'react';
import { Copy, Check, Search } from 'lucide-react';

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
  outline: '#87948b',
  error: '#ffb4ab',
};

const filterTabs = [
  'All 64',
  'Branching',
  'Undoing & History',
  'Remote & Sync',
  'Stashing',
  'Internals',
];

const gitGroups = [
  {
    title: 'Branching & Merging',
    icon: '🌿',
    commands: [
      { cmd: 'git branch -vv', desc: 'Show tracking branches + commit info' },
      { cmd: 'git checkout -b feat/my-feature', desc: 'Create and switch to new feature branch' },
      {
        cmd: 'git merge --no-ff feature',
        desc: 'Merge with explicit merge commit (preserves history)',
      },
      { cmd: 'git rebase -i HEAD~3', desc: 'Interactive rebase — squash/reorder last 3 commits' },
    ],
    diagram: (
      <svg viewBox="0 0 220 80" style={{ width: '100%', height: 64 }}>
        <circle cx="20" cy="40" r="8" fill="#171f33" stroke="#68dba9" strokeWidth="2" />
        <circle cx="60" cy="40" r="8" fill="#171f33" stroke="#68dba9" strokeWidth="2" />
        <circle cx="100" cy="20" r="8" fill="#1E293B" stroke="#ffb599" strokeWidth="2" />
        <circle cx="140" cy="20" r="8" fill="#1E293B" stroke="#ffb599" strokeWidth="2" />
        <circle cx="100" cy="60" r="8" fill="#171f33" stroke="#68dba9" strokeWidth="2" />
        <circle cx="180" cy="40" r="10" fill="#25a475" stroke="#68dba9" strokeWidth="2" />
        <line x1="28" y1="40" x2="52" y2="40" stroke="#68dba9" strokeWidth="1.5" />
        <line x1="68" y1="36" x2="92" y2="24" stroke="#ffb599" strokeWidth="1.5" />
        <line x1="68" y1="44" x2="92" y2="56" stroke="#68dba9" strokeWidth="1.5" />
        <line x1="108" y1="20" x2="132" y2="20" stroke="#ffb599" strokeWidth="1.5" />
        <line x1="148" y1="24" x2="172" y2="36" stroke="#68dba9" strokeWidth="1.5" />
        <line x1="108" y1="56" x2="172" y2="44" stroke="#68dba9" strokeWidth="1.5" />
        <text fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="7" x="14" y="56">
          main
        </text>
        <text fill="#ffb599" fontFamily="JetBrains Mono" fontSize="7" x="93" y="12">
          feature
        </text>
        <text fill="#68dba9" fontFamily="JetBrains Mono" fontSize="7" x="172" y="34">
          merge
        </text>
      </svg>
    ),
    color: C.primary,
  },
  {
    title: 'Undoing & History Rewriting',
    icon: '⏪',
    commands: [
      { cmd: 'git revert HEAD~2..HEAD', desc: 'Revert last 2 commits as new commits (safe)' },
      { cmd: 'git reset --soft HEAD~1', desc: 'Undo last commit — keep changes staged' },
      { cmd: 'git reset --hard HEAD~1', desc: 'Undo last commit — discard all changes (DANGER)' },
      { cmd: 'git reflog expire --expire=now', desc: 'Expire all reflog entries (GC prep)' },
    ],
    diagram: (
      <svg viewBox="0 0 220 80" style={{ width: '100%', height: 64 }}>
        {[20, 60, 100, 140].map((x, i) => (
          <g key={x}>
            <circle
              cx={x}
              cy="40"
              r="8"
              fill={i >= 2 ? `${C.surfaceContainerHigh}` : C.surfaceContainer}
              stroke={i >= 2 ? C.error : C.primary}
              strokeWidth="2"
            />
            {i > 0 && (
              <line
                x1={x - 32}
                y1="40"
                x2={x - 8}
                y2="40"
                stroke={i >= 2 ? C.error : C.primary}
                strokeWidth="1.5"
                strokeDasharray={i >= 2 ? '3 3' : 'none'}
              />
            )}
          </g>
        ))}
        <text fill={C.primary} fontFamily="JetBrains Mono" fontSize="7" x="8" y="56">
          HEAD~2
        </text>
        <text fill={C.primary} fontFamily="JetBrains Mono" fontSize="7" x="48" y="56">
          HEAD~1
        </text>
        <text fill="#ffb4ab" fontFamily="JetBrains Mono" fontSize="7" x="92" y="56">
          reverted
        </text>
        <text fill="#ffb4ab" fontFamily="JetBrains Mono" fontSize="7" x="132" y="56">
          reverted
        </text>
        <path
          d="M 160 40 Q 180 10 200 40"
          stroke={C.primary}
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <circle
          cx="200"
          cy="40"
          r="8"
          fill={C.primaryContainer}
          stroke={C.primary}
          strokeWidth="2"
        />
        <text fill={C.primary} fontFamily="JetBrains Mono" fontSize="7" x="190" y="56">
          new
        </text>
      </svg>
    ),
    color: C.secondary,
  },
  {
    title: 'Remote & Synchronization',
    icon: '🌐',
    commands: [
      { cmd: 'git remote add upstream <url>', desc: 'Add upstream remote for fork workflow' },
      { cmd: 'git fetch --all --prune', desc: 'Fetch all remotes, prune deleted branches' },
      {
        cmd: 'git pull --rebase origin main',
        desc: 'Pull with rebase instead of merge (cleaner history)',
      },
      {
        cmd: 'git push --force-with-lease',
        desc: 'Safe force push — fails if remote has new commits',
      },
    ],
    diagram: (
      <svg viewBox="0 0 220 80" style={{ width: '100%', height: 64 }}>
        <rect
          x="10"
          y="20"
          width="60"
          height="40"
          rx="6"
          fill={C.surfaceContainerHigh}
          stroke={C.primary}
          strokeWidth="1.5"
        />
        <text
          fill={C.primary}
          fontFamily="JetBrains Mono"
          fontSize="8"
          textAnchor="middle"
          x="40"
          y="38"
        >
          Local
        </text>
        <text
          fill={C.textMuted}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="40"
          y="52"
        >
          feat branch
        </text>
        <rect
          x="150"
          y="20"
          width="60"
          height="40"
          rx="6"
          fill={C.surfaceContainerHigh}
          stroke={C.secondaryContainer}
          strokeWidth="1.5"
        />
        <text
          fill={C.secondaryContainer}
          fontFamily="JetBrains Mono"
          fontSize="8"
          textAnchor="middle"
          x="180"
          y="38"
        >
          Remote
        </text>
        <text
          fill={C.textMuted}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="180"
          y="52"
        >
          origin/main
        </text>
        <path d="M 70 35 L 150 35" stroke={C.primary} strokeWidth="1.5" markerEnd="url(#end)" />
        <path
          d="M 150 45 L 70 45"
          stroke={C.secondaryContainer}
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <text
          fill={C.primary}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="110"
          y="30"
        >
          push
        </text>
        <text
          fill={C.secondaryContainer}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="110"
          y="58"
        >
          fetch
        </text>
      </svg>
    ),
    color: C.primary,
  },
  {
    title: 'Git Internals & Object Model',
    icon: '⚙️',
    commands: [
      { cmd: 'git cat-file -p HEAD', desc: 'Display raw content of HEAD commit object' },
      { cmd: 'git ls-tree HEAD', desc: 'List tree object of HEAD (filenames + SHA)' },
      { cmd: 'git hash-object -w file.txt', desc: 'Hash file and write to object store' },
      { cmd: 'git count-objects -vH', desc: 'Count loose objects and pack files with sizes' },
    ],
    diagram: (
      <svg viewBox="0 0 220 80" style={{ width: '100%', height: 64 }}>
        {[
          { x: 40, y: 20, label: 'commit', color: C.primary },
          { x: 110, y: 20, label: 'tree', color: C.secondary },
          { x: 180, y: 10, label: 'blob', color: C.outline },
          { x: 180, y: 40, label: 'blob', color: C.outline },
          { x: 180, y: 65, label: 'blob', color: C.outline },
        ].map(({ x, y, label, color }, i) => (
          <g key={i}>
            <rect
              x={x - 20}
              y={y - 10}
              width={40}
              height={20}
              rx="4"
              fill={C.surfaceContainerHigh}
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              fill={color}
              fontFamily="JetBrains Mono"
              fontSize="7"
              textAnchor="middle"
              x={x}
              y={y + 4}
            >
              {label}
            </text>
          </g>
        ))}
        <line x1="60" y1="20" x2="90" y2="20" stroke={C.primary} strokeWidth="1.5" />
        <line x1="130" y1="17" x2="160" y2="12" stroke={C.secondary} strokeWidth="1" />
        <line x1="130" y1="20" x2="160" y2="40" stroke={C.secondary} strokeWidth="1" />
        <line x1="130" y1="23" x2="160" y2="63" stroke={C.secondary} strokeWidth="1" />
      </svg>
    ),
    color: C.tertiary,
  },
  {
    title: 'Stashing & Worktree',
    icon: '📦',
    commands: [
      {
        cmd: 'git stash push -m "WIP: auth refactor"',
        desc: 'Named stash with descriptive message',
      },
      {
        cmd: 'git stash apply stash@{2}',
        desc: 'Apply specific stash by index (keep in stash list)',
      },
      {
        cmd: 'git worktree add ../hotfix hotfix/v2',
        desc: 'Create a parallel worktree for branch work',
      },
      {
        cmd: 'git stash branch new-feature stash@{0}',
        desc: 'Create branch from stash and apply it',
      },
    ],
    diagram: (
      <svg viewBox="0 0 220 80" style={{ width: '100%', height: 64 }}>
        <rect
          x="10"
          y="15"
          width="55"
          height="50"
          rx="6"
          fill={C.surfaceContainerHigh}
          stroke={C.primary}
          strokeWidth="1.5"
        />
        <text
          fill={C.primary}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="37"
          y="35"
        >
          Working
        </text>
        <text
          fill={C.primary}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="37"
          y="47"
        >
          Dir
        </text>
        <rect
          x="80"
          y="25"
          width="55"
          height="30"
          rx="6"
          fill={C.surfaceContainerHigh}
          stroke={C.secondary}
          strokeWidth="1.5"
        />
        <text
          fill={C.secondary}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="107"
          y="45"
        >
          stash@{'{0}'}
        </text>
        <rect
          x="150"
          y="15"
          width="60"
          height="50"
          rx="6"
          fill={C.surfaceContainerHigh}
          stroke={C.outline}
          strokeWidth="1.5"
        />
        <text
          fill={C.outline}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="180"
          y="35"
        >
          stash
        </text>
        <text
          fill={C.outline}
          fontFamily="JetBrains Mono"
          fontSize="7"
          textAnchor="middle"
          x="180"
          y="47"
        >
          list
        </text>
        <path d="M 65 35 L 80 35" stroke={C.secondary} strokeWidth="1.5" />
        <path d="M 135 40 L 150 40" stroke={C.outline} strokeWidth="1.5" />
      </svg>
    ),
    color: C.secondary,
  },
  {
    title: 'Commits & Tagging',
    icon: '🏷️',
    commands: [
      { cmd: 'git commit --amend --no-edit', desc: 'Amend last commit without editing message' },
      { cmd: 'git tag -a v1.0.0 -m "Release v1.0.0"', desc: 'Create annotated tag with message' },
      { cmd: 'git log --oneline --graph --all', desc: 'Pretty full branch topology graph' },
      {
        cmd: 'git bisect start && git bisect bad HEAD',
        desc: 'Start binary search for the bug commit',
      },
    ],
    diagram: (
      <svg viewBox="0 0 220 80" style={{ width: '100%', height: 64 }}>
        {[20, 60, 100, 140, 180].map((x, i) => (
          <g key={x}>
            <circle
              cx={x}
              cy="40"
              r="8"
              fill={i === 2 ? C.primaryContainer : C.surfaceContainer}
              stroke={i === 2 ? C.primary : C.outline}
              strokeWidth="2"
            />
            {i > 0 && (
              <line x1={x - 32} y1="40" x2={x - 8} y2="40" stroke={C.outline} strokeWidth="1.5" />
            )}
            {i === 2 && (
              <>
                <path
                  d="M 100 32 L 100 18 L 112 18"
                  stroke={C.secondary}
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="112"
                  y="12"
                  width="30"
                  height="12"
                  rx="3"
                  fill={C.surfaceContainerHigh}
                  stroke={C.secondary}
                  strokeWidth="1"
                />
                <text fill={C.secondary} fontFamily="JetBrains Mono" fontSize="7" x="115" y="21">
                  v1.0.0
                </text>
              </>
            )}
          </g>
        ))}
        <text fill={C.primary} fontFamily="JetBrains Mono" fontSize="7" x="92" y="56">
          tagged
        </text>
      </svg>
    ),
    color: C.primary,
  },
];

interface PageProps {
  params: Promise<{ domain: string }>;
}

export default function CheatsheetPage({ params: _params }: PageProps) {
  const [activeFilter, setActiveFilter] = useState('All 64');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: C.surface,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '24px 24px 0',
          borderBottom: `1px solid ${C.surfaceContainerHigh}`,
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 20,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: C.textMuted,
                marginBottom: 8,
              }}
            >
              Cheat Sheets / <span style={{ color: C.primary }}>Git Internals</span>
            </div>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: C.textHeading,
                margin: '0 0 6px',
                letterSpacing: '-0.02em',
              }}
            >
              Git Commands & Internal Mechanics
            </h1>
            <p style={{ fontSize: 14, color: C.textMuted, margin: 0 }}>
              Interactive command reference with DAG diagrams and copy-ready snippets.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ position: 'relative' }}>
              <Search
                size={14}
                style={{
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: C.outline,
                }}
              />
              <input
                type="text"
                placeholder="Search 64 commands..."
                style={{
                  backgroundColor: C.surfaceInset,
                  color: C.onSurface,
                  fontSize: 13,
                  fontFamily: "'Inter', sans-serif",
                  padding: '8px 12px 8px 32px',
                  borderRadius: 8,
                  border: 'none',
                  outline: 'none',
                  width: 220,
                }}
              />
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 4, overflowX: 'auto' }}>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px 8px 0 0',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeFilter === tab ? C.surfaceContainerHigh : 'transparent',
                color: activeFilter === tab ? C.primary : C.textMuted,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 500,
                borderBottom:
                  activeFilter === tab ? `2px solid ${C.primary}` : '2px solid transparent',
                whiteSpace: 'nowrap',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Command cards grid */}
      <div
        style={{
          flex: 1,
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          alignContent: 'start',
        }}
      >
        {gitGroups.map(({ title, icon, commands, diagram, color }) => (
          <div
            key={title}
            style={{
              backgroundColor: C.surfaceCard,
              borderRadius: 16,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            {/* Card header */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: `1px solid ${C.surfaceContainerHigh}`,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span style={{ fontSize: 20 }}>{icon}</span>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: C.textHeading,
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <span
                style={{
                  marginLeft: 'auto',
                  padding: '2px 8px',
                  borderRadius: 4,
                  backgroundColor: `${color}26`,
                  color,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                }}
              >
                4 cmds
              </span>
            </div>

            {/* Diagram */}
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: C.surfaceContainerLowest,
                borderBottom: `1px solid ${C.surfaceContainerHigh}`,
              }}
            >
              {diagram}
            </div>

            {/* Commands */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {commands.map(({ cmd, desc }) => (
                <div
                  key={cmd}
                  style={{
                    padding: '10px 16px',
                    borderBottom: `1px solid ${C.surfaceContainerHigh}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 8,
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: color,
                        fontWeight: 500,
                        wordBreak: 'break-all',
                      }}
                    >
                      {cmd}
                    </code>
                    <button
                      onClick={() => handleCopy(cmd)}
                      style={{
                        padding: '4px 6px',
                        borderRadius: 6,
                        border: 'none',
                        backgroundColor: C.surfaceContainerHigh,
                        color: copiedCmd === cmd ? C.primary : C.textMuted,
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    >
                      {copiedCmd === cmd ? <Check size={12} /> : <Copy size={12} />}
                    </button>
                  </div>
                  <span style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.5 }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky footer jump bar */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: C.surfaceContainer,
          borderTop: `1px solid ${C.surfaceContainerHigh}`,
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted }}
        >
          Jump to:
        </span>
        {gitGroups.map(({ title, color }) => (
          <button
            key={title}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: 'none',
              backgroundColor: C.surfaceContainerHigh,
              color,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            {title.split(' ')[0]}
          </button>
        ))}
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: C.primary,
          }}
        >
          64 commands total
        </span>
      </div>
    </div>
  );
}
