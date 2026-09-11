import React from 'react';
import Link from 'next/link';

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Visual Dev Docs
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/dashboard" className="hover:text-blue-400 transition">
                Dashboard
              </Link>
              <Link href="/roadmap/git" className="hover:text-blue-400 transition">
                Roadmaps
              </Link>
              <Link href="/learn/git/rebase" className="hover:text-blue-400 transition">
                Interactive Playground
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              STUDENT
            </span>
            <Link href="/profile" className="text-sm font-medium hover:text-blue-400 transition">
              Profile
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
