import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const userProgress = [
    { domain: 'git', title: 'Git Interactive Rebase', progress: 85, topic: 'rebase' },
    { domain: 'dsa', title: 'Binary Search Tree Balancing', progress: 40, topic: 'bst-balance' },
    { domain: 'devops', title: 'Kubernetes Pod Lifecycle', progress: 10, topic: 'k8s-pods' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Learning Dashboard</h1>
      <p className="text-sm text-slate-400 mb-8">
        Track your visual learning progress across all developer domains.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {userProgress.map((item) => (
          <div
            key={item.topic}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono uppercase text-blue-400 font-semibold">
                {item.domain}
              </span>
              <h3 className="text-lg font-bold text-slate-100 mt-1 mb-4">{item.title}</h3>
              <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className="text-xs text-slate-400">{item.progress}% Completed</span>
            </div>
            <Link
              href={`/learn/${item.domain}/${item.topic}`}
              className="mt-6 text-center py-2.5 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 text-sm font-semibold transition"
            >
              Continue Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
