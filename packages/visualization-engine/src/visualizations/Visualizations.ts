import { IVisualizationFrame } from '@visual-dev-docs/shared-types';

export function renderForLoopViz(frame: IVisualizationFrame): string {
  const line = String(frame.scope_variables.line_content || '');
  return `
    <div class="p-4 bg-slate-900 border border-slate-800 rounded-lg text-sm font-mono text-cyan-400">
      <div class="text-xs text-slate-500 mb-2">[For Loop Execution Step]</div>
      <div class="font-bold text-lg mb-2">Executing Line ${frame.line_number}</div>
      <div class="bg-slate-950 p-2 rounded text-emerald-400 mb-2">${line || 'Iteration in progress...'}</div>
      <div class="text-slate-400">Variables: ${JSON.stringify(frame.scope_variables)}</div>
    </div>
  `;
}

export function renderCallStackViz(frame: IVisualizationFrame): string {
  return `
    <div class="p-4 bg-slate-900 border border-slate-800 rounded-lg text-sm font-mono text-cyan-400">
      <div class="text-xs text-slate-500 mb-2">[Call Stack Inspector]</div>
      <div class="flex flex-col gap-1">
        ${frame.call_stack.map((fn) => `<div class="bg-indigo-950/80 border border-indigo-500/30 px-3 py-1.5 rounded text-indigo-200">▶ ${fn}</div>`).join('')}
      </div>
    </div>
  `;
}

export function renderArrayViz(frame: IVisualizationFrame): string {
  return `
    <div class="p-4 bg-slate-900 border border-slate-800 rounded-lg text-sm font-mono text-cyan-400">
      <div class="text-xs text-slate-500 mb-2">[Array Operations Visualizer]</div>
      <div class="flex gap-2 my-2">
        <div class="px-3 py-2 bg-sky-950 border border-sky-500 text-sky-200 rounded">Index: ${frame.frame_index}</div>
        <div class="px-3 py-2 bg-slate-950 border border-slate-700 text-slate-300 rounded">Line: ${frame.line_number}</div>
      </div>
    </div>
  `;
}

export function renderTreeViz(frame: IVisualizationFrame): string {
  return `<div class="p-4 bg-slate-900 border border-slate-800 rounded text-sm text-cyan-400">[Binary Tree Traversal Node ${frame.frame_index}]</div>`;
}

export function renderGraphViz(frame: IVisualizationFrame): string {
  return `<div class="p-4 bg-slate-900 border border-slate-800 rounded text-sm text-cyan-400">[Graph BFS/DFS Traversal Step ${frame.frame_index}]</div>`;
}

export function renderGitGraphViz(frame: IVisualizationFrame): string {
  return `<div class="p-4 bg-slate-900 border border-slate-800 rounded text-sm text-purple-400">[Git Commit Tree Frame ${frame.frame_index}]</div>`;
}

export function renderDockerViz(_frame: IVisualizationFrame): string {
  return `<div class="p-4 bg-slate-900 border border-slate-800 rounded text-sm text-emerald-400">[Docker Container State: RUNNING]</div>`;
}

export function renderPipelineViz(frame: IVisualizationFrame): string {
  return `<div class="p-4 bg-slate-900 border border-slate-800 rounded text-sm text-amber-400">[CI/CD Pipeline Stage ${frame.frame_index + 1}: PASSED]</div>`;
}
