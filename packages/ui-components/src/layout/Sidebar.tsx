import React from 'react';

export const Sidebar: React.FC<{ items: Array<{ id: string; title: string }>; activeId?: string; onSelect?: (id: string) => void }> = ({
  items,
  activeId,
  onSelect
}) => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 space-y-2">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Topics</div>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect?.(item.id)}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
            item.id === activeId ? 'bg-sky-950 text-sky-400 font-medium border border-sky-800' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          {item.title}
        </button>
      ))}
    </aside>
  );
};
