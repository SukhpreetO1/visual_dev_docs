'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

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
};

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div
      style={{
        backgroundColor: C.surface,
        color: C.onSurface,
        fontFamily: "'Inter', sans-serif",
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT: Promotional panel ── */}
      <div
        style={{
          backgroundColor: C.surfaceContainerLowest,
          padding: '32px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* Ambient glows */}
        <div
          style={{
            position: 'absolute',
            top: -96,
            left: -96,
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
            bottom: 40,
            right: -80,
            width: 320,
            height: 320,
            backgroundColor: `${C.secondaryContainer}26`,
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#3d4a42" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="#68dba9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Brand & Back Button */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 24,
            }}
          >
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
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: C.textHeading,
                    }}
                  >
                    Visual Dev Docs
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      padding: '2px 6px',
                      borderRadius: 9999,
                      backgroundColor: `${C.primary}1A`,
                      color: C.primary,
                    }}
                  >
                    v2.4 LTS
                  </span>
                </div>
                <p style={{ fontSize: 11, color: C.textMuted, margin: 0 }}>
                  Interactive Code Architecture Engine
                </p>
              </div>
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

          {/* Eyebrow + headline */}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '3px 10px',
                borderRadius: 9999,
                backgroundColor: C.surfaceContainerHigh,
                color: C.primary,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: C.primary,
                  display: 'inline-block',
                }}
              />
              ACCOUNT RECOVERY
            </div>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 26,
                fontWeight: 700,
                color: C.textHeading,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 10,
              }}
            >
              Reset your password{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${C.primary}, ${C.primaryFixed}, ${C.secondary})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                securely.
              </span>
            </h1>
            <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
              Enter your work email address and we will send you a one-time encrypted reset link.
            </p>
          </div>

          {/* Feature badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              {
                icon: '🔒',
                text: 'Encrypted single-use token links auto-expire in 15 mins',
                color: C.primary,
              },
              {
                icon: '🛡',
                text: 'Hardware-backed OAuth fallback recovery available',
                color: C.secondaryContainer,
              },
            ].map(({ icon, text, color }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 12px',
                  borderRadius: 10,
                  backgroundColor: `${C.surfaceContainerLow}E6`,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    backgroundColor: `${color}26`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                  }}
                >
                  {icon}
                </div>
                <span style={{ fontSize: 12, color: C.onSurface }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote footer */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              backgroundColor: C.surfaceContainerHighest,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              color: C.primary,
              fontSize: 14,
            }}
          >
            λ
          </div>
          <p style={{ fontSize: 11, color: C.textMuted, fontStyle: 'italic', margin: 0 }}>
            &ldquo;Quick account recovery means zero lost productivity during security
            rotations.&rdquo;
          </p>
        </div>
      </div>

      {/* ── RIGHT: Form ── */}
      <div
        style={{
          backgroundColor: C.surface,
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: '100%', maxWidth: 440 }}>
          <div
            style={{
              borderRadius: 16,
              backgroundColor: `${C.surfaceCard}E6`,
              backdropFilter: 'blur(16px)',
              padding: 24,
              boxShadow: '0 20px 48px rgba(0,0,0,0.4)',
            }}
          >
            {!submitted ? (
              <>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: C.textHeading,
                    margin: '0 0 4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Forgot Password?
                </h2>
                <p style={{ fontSize: 12, color: C.textMuted, margin: '0 0 20px' }}>
                  No worries! Enter your registered work email and we will send reset instructions.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 12,
                        fontWeight: 500,
                        color: C.textHeading,
                        marginBottom: 6,
                      }}
                    >
                      Work Email Address
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          left: 10,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: C.textMuted,
                          fontSize: 14,
                        }}
                      >
                        <Mail size={14} />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.io"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: C.surfaceInset,
                          color: C.textHeading,
                          fontSize: 13,
                          padding: '8px 10px 8px 32px',
                          borderRadius: 10,
                          border: 'none',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      padding: '10px 18px',
                      borderRadius: 10,
                      backgroundColor: C.primary,
                      color: C.onPrimary,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(104,219,169,0.3)',
                      marginTop: 4,
                    }}
                  >
                    Send Reset Link <ArrowRight size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: `${C.primary}26`,
                    color: C.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <CheckCircle2 size={24} />
                </div>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: C.textHeading,
                    margin: '0 0 8px',
                  }}
                >
                  Check your inbox
                </h2>
                <p
                  style={{ fontSize: 12, color: C.textMuted, margin: '0 0 20px', lineHeight: 1.6 }}
                >
                  We have sent password reset instructions to{' '}
                  <strong style={{ color: C.textHeading }}>{email}</strong>.
                </p>
                <Link
                  href="/reset-password"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 18px',
                    borderRadius: 10,
                    backgroundColor: C.primaryContainer,
                    color: C.onPrimary,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  Proceed to Reset Password <ArrowRight size={14} />
                </Link>
              </div>
            )}

            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: `1px solid ${C.surfaceContainerHighest}`,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link
                href="/login"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  color: C.primary,
                  textDecoration: 'none',
                }}
              >
                <ArrowLeft size={14} /> Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
