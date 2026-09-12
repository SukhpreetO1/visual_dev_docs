import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#0B1326] text-[#DAE2FD] min-h-screen font-sans selection:bg-[#059669] selection:text-white">
      {/* Top Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#0B1326]/85 backdrop-blur-xl border-b border-[#1E293B]">
        <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#171F33] border border-[#1E293B] flex items-center justify-center shadow-lg">
                <div className="flex items-center text-xs font-mono font-bold">
                  <span className="text-[#059669]">&lt;</span>
                  <span className="text-[#10B981]">O</span>
                  <span className="text-[#EA580C]">&gt;</span>
                </div>
              </div>
              <span className="text-xl font-bold text-[#F1F5F9] tracking-tight">
                Visual Dev Docs
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/dashboard"
                className="px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#171F33] transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/roadmap/git"
                className="px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#171F33] transition-colors"
              >
                Interactive Roadmaps
              </Link>
              <Link
                href="/learn/git/rebase"
                className="px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#171F33] transition-colors"
              >
                Playground IDE
              </Link>
              <Link
                href="/cheatsheet/git"
                className="px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#171F33] transition-colors"
              >
                Cheat Sheets
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-[#1E293B] hover:bg-[#2D3449] text-[#F1F5F9] transition-all"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#68DBA9] text-[#003825] hover:bg-[#85F8C4] transition-all shadow-[0_0_15px_rgba(104,219,169,0.25)]"
            >
              Start Learning Free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 pb-16">
        {/* Ambient Glow Effects */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#68DBA9]/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute top-60 -left-20 w-[350px] h-[350px] bg-[#EA580C]/10 blur-[130px] pointer-events-none rounded-full" />

          {/* Hero Section */}
          <div className="pt-12 pb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171F33] border border-[#1E293B] text-xs font-mono text-[#68DBA9] mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#68DBA9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#68DBA9]" />
              </span>
              Next-Gen Developer Learning • Live WASM Runtime
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F1F5F9] tracking-tight leading-[1.15] mb-6">
              Don&apos;t Just Read Code. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#68DBA9] via-[#85F8C4] to-[#EA580C] bg-clip-text text-transparent">
                See It Execute.
              </span>
            </h1>

            <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
              Master Programming, DSA, Git, DevOps, and System Design with real-time interactive
              execution visualizations, memory graph inspection, and context-aware AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12">
              <Link
                href="/roadmap/git"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#68DBA9] text-[#003825] font-bold hover:bg-[#85F8C4] transition-all shadow-[0_0_20px_rgba(104,219,169,0.3)]"
              >
                <span>Explore Roadmaps</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/learn/git/rebase"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2D3449] hover:bg-[#31394D] text-[#FFB599] font-bold border border-[#334155] transition-all"
              >
                <Zap className="w-4 h-4" />
                <span>Try Sandbox Playground</span>
              </Link>
            </div>

            {/* Social Proof Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
              <div className="p-4 rounded-xl bg-[#171F33]/80 border border-[#1E293B]">
                <span className="block text-2xl font-extrabold text-[#F1F5F9]">45,000+</span>
                <span className="text-xs text-[#94A3B8]">Engineers leveling up</span>
              </div>
              <div className="p-4 rounded-xl bg-[#171F33]/80 border border-[#1E293B]">
                <span className="block text-2xl font-extrabold text-[#68DBA9]">99.9%</span>
                <span className="text-xs text-[#94A3B8]">WASM sandbox uptime</span>
              </div>
              <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-[#171F33]/80 border border-[#1E293B]">
                <span className="block text-2xl font-extrabold text-[#FFB599]">120+</span>
                <span className="text-xs text-[#94A3B8]">Interactive algorithms</span>
              </div>
            </div>
          </div>

          {/* Workbench Preview Mockup Section */}
          <div className="mt-6 rounded-2xl overflow-hidden bg-[#060E20] border border-[#1E293B] shadow-2xl shadow-black/80">
            {/* Top Bar */}
            <div className="bg-[#171F33] px-4 py-2.5 flex items-center justify-between border-b border-[#1E293B]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                <span className="text-xs font-mono text-[#94A3B8] ml-2">
                  binary_search_visualizer.ts • VDD WebAssembly Worker
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B1120] text-[#68DBA9] border border-[#1E293B]">
                  ⚡ WASM 60 FPS
                </span>
              </div>
            </div>

            {/* Split Workbench Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              {/* Code Editor Pane */}
              <div className="lg:col-span-7 bg-[#0B1120] p-5 border-r border-[#1E293B] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B]">
                    <span className="text-xs font-mono text-[#68DBA9] font-bold">
                      binary_search.ts
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">Target = 42</span>
                  </div>
                  <pre className="font-mono text-xs text-[#DAE2FD] leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-[#94A3B8]">01</span>{' '}
                      <span className="text-[#68DBA9]">function</span>{' '}
                      <span className="text-[#85F8C4]">binarySearch</span>(arr:{' '}
                      <span className="text-[#FFB599]">number[]</span>, target:{' '}
                      <span className="text-[#FFB599]">number</span>):{' '}
                      <span className="text-[#FFB599]">number</span> {'{\n'}
                      <span className="text-[#94A3B8]">02</span>{' '}
                      <span className="text-[#68DBA9]">let</span> left = 0;{'\n'}
                      <span className="text-[#94A3B8]">03</span>{' '}
                      <span className="text-[#68DBA9]">let</span> right = arr.length - 1;{'\n'}
                      <span className="bg-[#68DBA9]/20 block -mx-5 px-5 py-0.5 border-l-2 border-[#68DBA9]">
                        <span className="text-[#68DBA9]">04</span>{' '}
                        <span className="text-[#68DBA9]">while</span> (left &lt;= right) {'{'}
                      </span>
                      <span className="text-[#94A3B8]">05</span>{' '}
                      <span className="text-[#68DBA9]">const</span> mid = Math.floor((left + right)
                      / 2);{'\n'}
                      <span className="text-[#94A3B8]">06</span>{' '}
                      <span className="text-[#68DBA9]">if</span> (arr[mid] === target){' '}
                      <span className="text-[#68DBA9]">return</span> mid;{'\n'}
                      <span className="text-[#94A3B8]">07</span> {'}'}
                      {'\n'}
                      <span className="text-[#94A3B8]">08</span>{' '}
                      <span className="text-[#68DBA9]">return</span> -1;{'\n'}
                      <span className="text-[#94A3B8]">09</span> {'}'}
                    </code>
                  </pre>
                </div>

                <div className="mt-4 p-2 rounded-lg bg-[#171F33] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>
                    Step <strong className="text-[#68DBA9]">04</strong> / 07
                  </span>
                  <span className="text-[#68DBA9]">Speed: 1.0x</span>
                </div>
              </div>

              {/* Memory Visualizer Pane */}
              <div className="lg:col-span-5 bg-[#131B2E] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-[#94A3B8]">
                      Memory Array Space
                    </span>
                    <span className="text-xs font-mono text-[#68DBA9]">arr[6] elements</span>
                  </div>

                  <div className="grid grid-cols-6 gap-2 text-center font-mono text-xs mb-6">
                    <div className="p-3 rounded bg-[#171F33] border border-[#1E293B] text-[#94A3B8]">
                      10
                    </div>
                    <div className="p-3 rounded bg-[#171F33] border border-[#1E293B] text-[#94A3B8]">
                      22
                    </div>
                    <div className="p-3 rounded bg-[#171F33] border border-[#1E293B] text-[#94A3B8]">
                      35
                    </div>
                    <div className="p-3 rounded bg-[#25A475]/30 border border-[#68DBA9] text-[#85F8C4] font-bold">
                      42
                    </div>
                    <div className="p-3 rounded bg-[#171F33] border border-[#1E293B] text-[#94A3B8]">
                      58
                    </div>
                    <div className="p-3 rounded bg-[#171F33] border border-[#1E293B] text-[#94A3B8]">
                      90
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0B1120] text-xs font-mono text-[#68DBA9] border border-[#1E293B]">
                    ✔ Match found at index 3 (arr[3] == 42)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
