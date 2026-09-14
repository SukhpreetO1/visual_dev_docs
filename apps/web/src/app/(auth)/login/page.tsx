'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight, TrendingUp, ArrowLeft } from 'lucide-react';

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
  secondary: '#ffb599',
  secondaryContainer: '#f66018',
  onSurface: '#dae2fd',
  onSurfaceVariant: '#bccac0',
  textHeading: '#F1F5F9',
  textMuted: '#94A3B8',
  error: '#ffb4ab',
  borderSubtle: '#334155',
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        backgroundColor: C.surface,
        color: C.onSurface,
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient backdrop gradients */}
      <div
        style={{
          position: 'absolute',
          top: -128,
          left: -128,
          width: 384,
          height: 384,
          backgroundColor: `${C.primary}1A`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -128,
          right: '25%',
          width: 384,
          height: 384,
          backgroundColor: `${C.secondaryContainer}1A`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main shell */}
      <div
        style={{
          width: '100%',
          maxWidth: 1100,
          backgroundColor: C.surfaceContainer,
          borderRadius: 16,
          boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* ── LEFT: Feature Panel ── */}
        <aside
          style={{
            backgroundColor: C.surfaceContainerLow,
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Dot grid pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.15,
              pointerEvents: 'none',
              backgroundImage: 'radial-gradient(#68dba9 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          {/* Ambient halos */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: -48,
              width: 240,
              height: 240,
              backgroundColor: `${C.primary}26`,
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '33%',
              right: -48,
              width: 192,
              height: 192,
              backgroundColor: `${C.secondaryContainer}26`,
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {/* Top row: Badge & Back to Home */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 12px',
                    borderRadius: 9999,
                    backgroundColor: `${C.primary}1A`,
                    color: C.primary,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: C.primary,
                      display: 'inline-block',
                    }}
                  />
                  Runtime v4.2 Active
                </span>
                <span
                  style={{
                    color: C.onSurfaceVariant,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                  }}
                >
                  WASM Engine 60fps
                </span>
              </div>

              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 12px',
                  borderRadius: 8,
                  backgroundColor: C.surfaceContainerHigh,
                  color: C.textHeading,
                  fontSize: 12,
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                }}
              >
                <ArrowLeft size={14} /> Back to Home
              </Link>
            </div>

            {/* Headline */}
            <div>
              <h1
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: C.textHeading,
                  letterSpacing: '-0.02em',
                  marginBottom: 12,
                }}
              >
                Level up your dev skills visually.
              </h1>
              <p style={{ fontSize: 14, color: C.onSurfaceVariant, lineHeight: 1.7 }}>
                Watch memory allocations, pointer shifts, recursion trees, and distributed event
                streams execute in real time.
              </p>
            </div>

            {/* Live heap card */}
            <div
              style={{
                backgroundColor: C.surfaceInset,
                borderRadius: 16,
                padding: 20,
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                  paddingBottom: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: `${C.error}B3`,
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: `${C.secondaryContainer}B3`,
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: `${C.primary}B3`,
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: C.onSurface,
                      marginLeft: 8,
                    }}
                  >
                    heap_traversal.ts
                  </span>
                </div>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    backgroundColor: C.surfaceContainer,
                    color: C.primary,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                  }}
                >
                  Active Run
                </span>
              </div>

              {/* Code snippet */}
              <pre
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: '0 0 12px',
                  padding: '8px 10px',
                  borderRadius: 6,
                  backgroundColor: `${C.surfaceContainerLowest}CC`,
                  overflowX: 'auto',
                }}
              >
                <code>
                  <span style={{ color: C.onSurfaceVariant }}>
                    {'// Live Heap Allocation & Pointer Traversal'}
                  </span>
                  {'\n'}
                  <span style={{ color: C.primary }}>const</span>
                  {' ['}
                  <span style={{ color: C.secondary }}>head</span>
                  {', current] = '}
                  <span style={{ color: C.primaryContainer, fontWeight: 500 }}>useLinkedList</span>
                  {`(nodes);\ncurrent.next = `}
                  <span style={{ color: C.primary }}>rotateRight</span>
                  {`(head, `}
                  <span style={{ color: C.secondary }}>2</span>
                  {');'}
                </code>
              </pre>

              {/* Memory nodes */}
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: C.onSurfaceVariant,
                    marginBottom: 8,
                  }}
                >
                  <span>HEAP DEREFERENCE</span>
                  <span style={{ color: C.primary }}>Step 3/6 • Allocated 256B</span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: 8,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: C.surfaceContainer,
                      padding: '8px 10px',
                      borderRadius: 6,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: C.textMuted,
                      }}
                    >
                      ADDR 0x7FF1
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
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
                          fontSize: 13,
                          color: C.textHeading,
                          fontWeight: 600,
                        }}
                      >
                        Node(42)
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: C.primary,
                    }}
                  >
                    <ArrowRight size={18} />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9,
                        color: C.onSurfaceVariant,
                      }}
                    >
                      ptr.next
                    </span>
                  </div>
                  <div
                    style={{
                      backgroundColor: C.surfaceContainerHigh,
                      padding: '8px 10px',
                      borderRadius: 6,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: C.textMuted,
                      }}
                    >
                      ADDR 0x7FF9
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: C.secondaryContainer,
                          display: 'inline-block',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          color: C.textHeading,
                          fontWeight: 600,
                        }}
                      >
                        Node(88)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution flow */}
              <div
                style={{
                  height: 36,
                  borderRadius: 6,
                  backgroundColor: C.surfaceContainerLowest,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 12px',
                  justifyContent: 'space-between',
                }}
              >
                <TrendingUp size={32} style={{ color: C.primary, width: '60%' }} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: C.textMuted,
                  }}
                >
                  JIT Pipelined
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div
              style={{
                backgroundColor: `${C.surfaceCard}E6`,
                backdropFilter: 'blur(8px)',
                padding: '12px 16px',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: C.surfaceContainerHigh,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  color: C.primary,
                  fontSize: 16,
                }}
              >
                E
              </div>
              <div>
                <p style={{ fontSize: 12, color: C.onSurface, margin: 0, fontStyle: 'italic' }}>
                  &ldquo;Cut our core infrastructure onboarding ramp by 60%.&rdquo;
                </p>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: C.onSurfaceVariant,
                  }}
                >
                  Elena Rostova, Staff Platform Architect @ HyperMesh
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* ── RIGHT: Auth Form ── */}
        <section
          style={{
            backgroundColor: C.surface,
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: 48,
              width: 288,
              height: 288,
              backgroundColor: `${C.primary}0D`,
              borderRadius: '50%',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: '100%',
              maxWidth: 420,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Brand header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: C.surfaceContainerHigh,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
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
                <div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: C.textHeading,
                    }}
                  >
                    Visual Dev Docs
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: C.onSurfaceVariant,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Interactive Engineering Lab
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 6,
                  backgroundColor: C.surfaceContainerHigh,
                  color: C.primary,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                }}
              >
                v2.8
              </div>
            </div>

            {/* Tab switcher */}
            <div
              style={{
                backgroundColor: C.surfaceContainerLowest,
                padding: 4,
                borderRadius: 12,
                display: 'flex',
                gap: 4,
              }}
            >
              <button
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: 8,
                  backgroundColor: C.surfaceCard,
                  color: C.textHeading,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                Sign In
              </button>
              <Link
                href="/register"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: 8,
                  backgroundColor: 'transparent',
                  color: C.onSurfaceVariant,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                Create Account
              </Link>
            </div>

            {/* Title */}
            <div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: C.textHeading,
                  margin: '0 0 6px',
                  letterSpacing: '-0.01em',
                }}
              >
                Welcome back, engineer
              </h2>
              <p style={{ fontSize: 14, color: C.onSurfaceVariant, margin: 0 }}>
                Enter your credentials to access your sandboxes and interactive diagrams.
              </p>
            </div>

            {/* OAuth */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                {
                  label: 'GitHub',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      style={{ width: 16, height: 16, fill: 'currentColor' }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  label: 'Google',
                  icon: (
                    <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                      />
                    </svg>
                  ),
                },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '10px 12px',
                    borderRadius: 12,
                    backgroundColor: C.surfaceCard,
                    border: 'none',
                    color: C.textHeading,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {icon} {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '100%', height: 1, backgroundColor: `${C.borderSubtle}80` }} />
              <span
                style={{
                  position: 'absolute',
                  backgroundColor: C.surface,
                  padding: '0 12px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: C.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                or continue with email
              </span>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              {/* Email */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <label
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: C.onSurfaceVariant,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Work Email Address
                  </label>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: C.textMuted,
                    }}
                  >
                    name@company.com
                  </span>
                </div>
                <div style={{ position: 'relative' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: C.textMuted,
                      fontSize: 14,
                    }}
                  >
                    @
                  </span>
                  <input
                    type="email"
                    placeholder="alex@engineering.io"
                    required
                    style={{
                      width: '100%',
                      backgroundColor: C.surfaceInset,
                      color: C.onSurface,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      padding: '10px 12px 10px 32px',
                      borderRadius: 8,
                      border: 'none',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <label
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: C.onSurfaceVariant,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: C.secondary,
                      textDecoration: 'none',
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
                <div style={{ position: 'relative' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: C.textMuted,
                      fontSize: 14,
                    }}
                  >
                    🔑
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    required
                    style={{
                      width: '100%',
                      backgroundColor: C.surfaceInset,
                      color: C.onSurface,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      padding: '10px 40px 10px 32px',
                      borderRadius: 8,
                      border: 'none',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: C.textMuted,
                      padding: 0,
                    }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer',
                    fontSize: 13,
                    color: C.onSurfaceVariant,
                  }}
                >
                  <input type="checkbox" defaultChecked style={{ accentColor: C.primary }} />{' '}
                  Remember device for 30 days
                </label>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: C.textMuted,
                  }}
                >
                  SSH Key Sync
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '14px 24px',
                  borderRadius: 12,
                  backgroundColor: C.primaryContainer,
                  color: C.onPrimary,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(37,164,117,0.3)',
                }}
              >
                Sign In to Workspace <ArrowRight size={18} />
              </button>
            </form>

            {/* Security badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                color: C.textMuted,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
              }}
            >
              🔒 Secured by Better Auth. Session encrypted with AES-256 GCM.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
