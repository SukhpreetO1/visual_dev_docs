import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const domains = [
    {
      name: 'Git & Version Control',
      slug: 'git',
      count: '12 Lessons',
      color: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Data Structures & Algorithms',
      slug: 'dsa',
      count: '24 Lessons',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'DevOps & CI/CD',
      slug: 'devops',
      count: '16 Lessons',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'React & Web Architecture',
      slug: 'react',
      count: '18 Lessons',
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <>
      <section className="py-24 text-center px-6 max-w-4xl mx-auto">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 inline-block">
          Interactive & Visual Learning Platform
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Master Complex Software Concepts Visually
        </h1>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Interactive documentation, real-time code simulation, and visual step-by-step roadmaps
          designed to wow modern developers.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/learn/git/rebase"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white shadow-lg shadow-blue-600/30 transition"
          >
            Try Interactive Lesson
          </Link>
          <Link
            href="/roadmap/git"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-slate-200 border border-slate-700 transition"
          >
            Explore Roadmaps
          </Link>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">
          Featured Visual Domains
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((d) => (
            <Link
              key={d.slug}
              href={`/roadmap/${d.slug}`}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.color}`} />
              <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition mb-2">
                {d.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium">{d.count}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
