import React from 'react';

export default function AdminLessonsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Admin Lesson Management</h1>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs text-white">
          + Create New Lesson
        </button>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-400">
        Lesson CRUD management dashboard.
      </div>
    </div>
  );
}
