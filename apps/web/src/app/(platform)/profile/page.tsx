import React from 'react';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">User Profile & Settings</h1>
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div>
          <label className="text-xs font-mono uppercase text-slate-400 block mb-1">Email</label>
          <div className="text-sm text-slate-200 font-semibold">student@visualdevdocs.io</div>
        </div>
        <div>
          <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
            Assigned Role
          </label>
          <div className="text-xs font-mono px-3 py-1 rounded bg-blue-500/20 text-blue-400 w-fit font-bold">
            STUDENT
          </div>
        </div>
      </div>
    </div>
  );
}
