'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 font-sans text-slate-100">
      <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-slate-400 text-center mb-8">
          Sign in to your Visual Dev Docs account
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white shadow-lg shadow-blue-600/30 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-500">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-blue-400 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
