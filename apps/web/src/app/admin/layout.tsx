import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin/lessons" className="text-lg font-bold text-red-400 font-mono">
            [ADMIN PORTAL]
          </Link>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/admin/lessons" className="hover:text-blue-400">
              Lesson Editor
            </Link>
            <Link href="/admin/roadmaps" className="hover:text-blue-400">
              Roadmap Editor
            </Link>
          </nav>
        </div>
        <Link href="/dashboard" className="text-xs text-slate-400 hover:text-white">
          Exit Admin
        </Link>
      </header>
      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">{children}</main>
    </div>
  );
}
