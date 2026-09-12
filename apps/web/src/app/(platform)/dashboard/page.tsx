import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const userProgress = [
    {
      domain: 'git',
      title: 'Git Interactive Rebase',
      progress: 85,
      topic: 'rebase',
      category: 'Version Control',
    },
    {
      domain: 'dsa',
      title: 'Binary Search Tree Balancing',
      progress: 40,
      topic: 'bst-balance',
      category: 'Algorithms',
    },
    {
      domain: 'devops',
      title: 'Kubernetes Pod Lifecycle',
      progress: 10,
      topic: 'k8s-pods',
      category: 'Cloud Native',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 w-full">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#1E293B]">
        <div>
          <span className="text-xs font-mono font-bold text-[#68DBA9] uppercase tracking-wider block mb-1">
            Overview
          </span>
          <h1 className="text-3xl font-extrabold text-[#F1F5F9] tracking-tight">
            Developer Dashboard
          </h1>
        </div>
        <Link
          href="/roadmap/git"
          className="px-4 py-2.5 rounded-xl bg-[#68DBA9] text-[#003825] font-bold text-xs hover:bg-[#85F8C4] transition shadow-md shadow-[rgba(104,219,169,0.2)]"
        >
          Explore Roadmaps →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {userProgress.map((item) => (
          <div
            key={item.topic}
            className="p-6 rounded-2xl bg-[#171F33] border border-[#1E293B] flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-[#68DBA9] font-bold px-2 py-0.5 rounded bg-[#25A475]/10 border border-[#059669]/20">
                  {item.category}
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">{item.progress}%</span>
              </div>
              <h3 className="text-lg font-bold text-[#F1F5F9] mt-2 mb-4">{item.title}</h3>
              <div className="w-full bg-[#0B1120] rounded-full h-2 overflow-hidden border border-[#1E293B]">
                <div
                  className="bg-[#68DBA9] h-[#68DBA9] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
            <Link
              href={`/learn/${item.domain}/${item.topic}`}
              className="mt-6 text-center py-2.5 rounded-xl bg-[#2D3449] hover:bg-[#31394D] text-[#F1F5F9] text-xs font-bold transition border border-[#334155]"
            >
              Continue Interactive Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
