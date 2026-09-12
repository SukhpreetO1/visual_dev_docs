'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-[#0B1326] flex items-center justify-center p-4 font-sans text-[#DAE2FD]">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#171F33] border border-[#1E293B] shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#68DBA9]/10 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-[#1E293B] flex items-center justify-center shadow-lg">
            <div className="flex items-center text-xs font-mono font-bold">
              <span className="text-[#059669]">&lt;</span>
              <span className="text-[#10B981]">O</span>
              <span className="text-[#EA580C]">&gt;</span>
            </div>
          </div>
          <span className="text-xl font-bold text-[#F1F5F9] tracking-tight">Visual Dev Docs</span>
        </div>

        <h2 className="text-2xl font-extrabold text-center mb-1 text-[#F1F5F9]">Create Account</h2>
        <p className="text-xs text-[#94A3B8] text-center mb-8">
          Build intuition through live execution and visual runtimes
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] text-white focus:outline-none focus:border-[#68DBA9] transition text-sm"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] text-white focus:outline-none focus:border-[#68DBA9] transition text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-[#1E293B] text-white focus:outline-none focus:border-[#68DBA9] transition text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#68DBA9] hover:bg-[#85F8C4] font-bold text-[#003825] transition shadow-lg shadow-[rgba(104,219,169,0.25)] text-sm"
          >
            Create Free Account
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#94A3B8]">
          Already registered?{' '}
          <Link href="/login" className="text-[#68DBA9] hover:underline font-semibold">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
