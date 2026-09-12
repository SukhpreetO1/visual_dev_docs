import React from 'react';
import Link from 'next/link';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
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
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        © 2026 Visual Dev Docs. Interactive Developer Documentation.
      </footer>
    </div>
  );
}
