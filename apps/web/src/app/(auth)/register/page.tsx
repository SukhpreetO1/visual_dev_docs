'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react';

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

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, fontFamily: "'Inter', sans-serif", minHeight: '100vh', display: 'grid', gridTemplateColumns: '5fr 7fr' }}>

      {/* ── LEFT: Promotional panel ── */}
      <div style={{ backgroundColor: C.surfaceContainerLowest, padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glows */}
        <div style={{ position: 'absolute', top: -96, left: -96, width: 384, height: 384, backgroundColor: `${C.primary}1A`, borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 40, right: -80, width: 320, height: 320, backgroundColor: `${C.secondaryContainer}26`, borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
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

        {/* Brand */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: C.surfaceContainerHigh, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
              <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="22" fill="#0B1326" />
                <path d="M32 32L18 50L32 68" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="15" stroke="#059669" strokeWidth="5" />
                <circle cx="50" cy="50" r="6" fill="#10B981" />
                <path d="M68 32L82 50L68 68" stroke="#EA580C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700, color: C.textHeading }}>Visual Dev Docs</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '2px 8px', borderRadius: 9999, backgroundColor: `${C.primary}1A`, color: C.primary }}>v2.4 LTS</span>
              </div>
              <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>Interactive Code Architecture Engine</p>
            </div>
          </div>

          {/* Eyebrow + headline */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 9999, backgroundColor: C.surfaceContainerHigh, color: C.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
              RUNTIME VISUALIZATION SUITE
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 32, fontWeight: 700, color: C.textHeading, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
              Build intuition through{' '}
              <span style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.primaryFixed}, ${C.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>visual execution.</span>
            </h1>
            <p style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.7 }}>
              Join 45,000+ systems engineers, cloud architects, and compiler developers mastering complex runtimes, concurrency patterns, and AST transformations.
            </p>
          </div>

          {/* Feature badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: '💾', text: 'Instant WASM sandboxes for Go, Rust, C++, and Python', color: C.primary },
              { icon: '🌲', text: 'Interactive dynamic memory graphs & call stack inspector', color: C.secondaryContainer },
              { icon: '✨', text: 'AI-powered architecture and complexity visualizer', color: C.primary },
            ].map(({ icon, text, color }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, backgroundColor: `${C.surfaceContainerLow}E6`, backdropFilter: 'blur(4px)' }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: `${color}26`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{icon}</div>
                <span style={{ fontSize: 14, color: C.onSurface }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call stack terminal preview */}
        <div style={{ position: 'relative', zIndex: 10, marginTop: 32, borderRadius: 20, backgroundColor: `${C.surfaceCard}E6`, backdropFilter: 'blur(8px)', padding: 20, boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${C.surfaceContainerHigh}66` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: C.error, display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: C.secondary, display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>quick_sort.rs [WASM-JIT]</span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.primary, display: 'flex', alignItems: 'center', gap: 4 }}>⚡ 0.04ms cycle</span>
          </div>
          {[
            { frame: 'FRAME 03', fn: 'partition(&mut arr, low, high)', sp: '0x7ffd18', active: true },
            { frame: 'FRAME 02', fn: 'quick_sort(&mut arr, 0, 7)', sp: '0x7ffd30', active: false },
            { frame: 'FRAME 01', fn: 'main()', sp: '0x7ffd58', active: false },
          ].map(({ frame, fn, sp, active }) => (
            <div key={frame} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: 8, backgroundColor: active ? C.surfaceInset : `${C.surfaceContainerHigh}99`, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ padding: '2px 6px', borderRadius: 4, backgroundColor: active ? `${C.primary}33` : C.surfaceContainer, color: active ? C.primary : C.textMuted, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{frame}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: active ? C.textHeading : C.onSurfaceVariant }}>{fn}</span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted }}>{sp}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, paddingTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button style={{ padding: '6px', borderRadius: 8, backgroundColor: C.surfaceContainer, border: 'none', color: C.onSurface, cursor: 'pointer' }}>⏮</button>
              <button style={{ padding: '6px', borderRadius: 8, backgroundColor: C.primary, border: 'none', color: C.onPrimary, cursor: 'pointer' }}>▶</button>
              <button style={{ padding: '6px', borderRadius: 8, backgroundColor: C.surfaceContainer, border: 'none', color: C.onSurface, cursor: 'pointer' }}>⏭</button>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>Step 14 of 42</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.secondary }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.secondary, display: 'inline-block' }} />
              Heap: 4.2 MB alloc
            </div>
          </div>
        </div>

        {/* Quote footer */}
        <div style={{ position: 'relative', zIndex: 10, marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: C.surfaceContainerHighest, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: C.primary, fontSize: 16 }}>λ</div>
          <p style={{ fontSize: 12, color: C.textMuted, fontStyle: 'italic', margin: 0 }}>&ldquo;The interactive memory pointer graphs completely replaced our whiteboard system design drills.&rdquo;</p>
        </div>
      </div>

      {/* ── RIGHT: Register form ── */}
      <div style={{ backgroundColor: C.surface, padding: '32px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 480 }}>
          {/* Card */}
          <div style={{ borderRadius: 20, backgroundColor: `${C.surfaceCard}E6`, backdropFilter: 'blur(16px)', padding: 32, boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
            {/* Tab switcher */}
            <div style={{ display: 'flex', padding: 4, borderRadius: 12, backgroundColor: C.surfaceInset, marginBottom: 24 }}>
              <button style={{ flex: 1, padding: '8px 16px', borderRadius: 8, backgroundColor: C.surfaceContainerHigh, color: C.textHeading, fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Create Account</button>
              <Link href="/login" style={{ flex: 1, padding: '8px 16px', borderRadius: 8, backgroundColor: 'transparent', color: C.textMuted, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sign In</Link>
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 700, color: C.textHeading, margin: '0 0 4px', letterSpacing: '-0.01em' }}>Create your developer account</h2>
            <p style={{ fontSize: 14, color: C.textMuted, margin: '0 0 24px' }}>Start visualizing live code execution, pointers, and concurrency in 30 seconds.</p>

            {/* OAuth */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              {[
                { label: 'GitHub', icon: <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'currentColor' }}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg> },
                { label: 'Google', icon: <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z" fill="#EA4335"/><path d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" fill="#4285F4"/><path d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.1 0 12s.6 3.7 1.6 5.6l3.7-2.9z" fill="#FBBC05"/><path d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z" fill="#34A853"/></svg> },
              ].map(({ label, icon }) => (
                <button key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '10px 16px', borderRadius: 12, backgroundColor: C.surfaceContainerLow, border: 'none', color: C.onSurface, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
                  {icon} {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '4px 0 20px' }}>
              <div style={{ width: '100%', height: 1, backgroundColor: C.surfaceContainerHighest }} />
              <span style={{ position: 'absolute', padding: '0 12px', backgroundColor: C.surfaceCard, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>or register with email</span>
            </div>

            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: C.textHeading, marginBottom: 6 }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.textMuted, fontSize: 16 }}>👤</span>
                  <input type="text" placeholder="Alex Rivera" defaultValue="Alex Rivera" style={{ width: '100%', backgroundColor: C.surfaceInset, color: C.textHeading, fontSize: 14, padding: '10px 12px 10px 36px', borderRadius: 12, border: 'none', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: C.textHeading, marginBottom: 6 }}>Work Email</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.textMuted, fontSize: 16 }}>✉</span>
                  <input type="email" placeholder="alex@company.io" defaultValue="alex@company.io" style={{ width: '100%', backgroundColor: C.surfaceInset, color: C.textHeading, fontSize: 14, padding: '10px 12px 10px 36px', borderRadius: 12, border: 'none', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              {/* Password */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: C.textHeading }}>Password</label>
                </div>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.textMuted, fontSize: 16 }}>🔒</span>
                  <input type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" defaultValue="RustRuntime2025#" style={{ width: '100%', backgroundColor: C.surfaceInset, color: C.textHeading, fontFamily: "'JetBrains Mono', monospace", fontSize: 14, padding: '10px 40px 10px 36px', borderRadius: 12, border: 'none', outline: 'none', boxSizing: 'border-box' }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: C.textMuted, padding: 0 }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {/* Password strength meter */}
                <div style={{ marginTop: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, height: 6, marginBottom: 6 }}>
                    {[...Array(4)].map((_, i) => <div key={i} style={{ borderRadius: 9999, backgroundColor: C.primary, height: '100%' }} />)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                    <span style={{ color: C.primary, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Check size={12} /> Strong password: 12+ chars, symbol, number
                    </span>
                    <span style={{ color: C.textMuted }}>Entropy 84-bit</span>
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 13, color: C.textMuted }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: C.primary, marginTop: 2 }} />
                  I agree to the <a href="#" style={{ color: C.primary, textDecoration: 'none' }}>Terms of Service</a> &amp; <a href="#" style={{ color: C.primary, textDecoration: 'none' }}>Privacy Policy</a>
                </label>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 13, color: C.textMuted }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: C.primary, marginTop: 2 }} />
                  Send me weekly visual algorithm breakdowns and roadmap updates
                </label>
              </div>

              {/* CTA */}
              <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', borderRadius: 12, backgroundColor: C.primary, color: C.onPrimary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', boxShadow: '0 4px 24px rgba(104,219,169,0.3)', marginTop: 4 }}>
                Create Free Account <ArrowRight size={18} />
              </button>
            </form>

            {/* Free tier badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 16px', borderRadius: 12, backgroundColor: `${C.surfaceContainerHigh}99`, marginTop: 16 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: C.onSurface }}>Includes free forever tier: <strong style={{ color: C.textHeading }}>10 WASM sandboxes</strong> &amp; core roadmap access.</span>
            </div>

            {/* Security */}
            <p style={{ textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginTop: 12 }}>
              🛡 Secured by Better Auth. Ed25519 Session Token encrypted.
            </p>

            {/* Footer links */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
              <span style={{ color: C.primary, display: 'flex', alignItems: 'center', gap: 4 }}>● All systems normal</span>
              <span style={{ color: C.textMuted }}>Documentation</span>
              <span style={{ color: C.textMuted }}>v2.4.1 Release</span>
              <span style={{ color: C.textMuted }}>© 2025 VisualDev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
