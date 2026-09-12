import React from 'react';
import Link from 'next/link';

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B1326] text-[#DAE2FD] flex flex-col font-sans selection:bg-[#059669] selection:text-white">
      {/* Top Header Navigation */}
      <header className="border-b border-[#1E293B] bg-[#0B1326]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#171F33] border border-[#1E293B] flex items-center justify-center shadow-md">
                <div className="flex items-center text-[10px] font-mono font-bold">
                  <span className="text-[#059669]">&lt;</span>
                  <span className="text-[#10B981]">O</span>
                  <span className="text-[#EA580C]">&gt;</span>
                </div>
              </div>
              <span className="text-lg font-bold text-[#F1F5F9] tracking-tight">
                Visual Dev Docs
              </span>
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium">
              <Link href="/dashboard" className="hover:text-[#68DBA9] text-[#94A3B8] transition">
                Dashboard
              </Link>
              <Link href="/roadmap/git" className="hover:text-[#68DBA9] text-[#94A3B8] transition">
                Roadmaps
              </Link>
              <Link
                href="/learn/git/rebase"
                className="hover:text-[#68DBA9] text-[#94A3B8] transition"
              >
                Playground IDE
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs px-3 py-1 rounded-full bg-[#25A475]/15 text-[#68DBA9] border border-[#059669]/30 font-mono font-bold">
              STUDENT
            </span>
            <Link
              href="/profile"
              className="text-sm font-medium text-[#94A3B8] hover:text-white transition"
            >
              Profile
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
