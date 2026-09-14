import { IVisualizationFrame } from '@visual-dev-docs/shared-types';
import { IRenderer } from './Renderer';

export class SvgRenderer implements IRenderer {
  public render(container: HTMLElement, frame: IVisualizationFrame): void {
    const svg_content = `
      <svg width="100%" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full bg-slate-900 rounded-lg p-4">
        <text x="20" y="30" fill="#38bdf8" font-family="monospace" font-size="14" font-weight="bold">
          Step ${frame.frame_index + 1} - Line ${frame.line_number}
        </text>
        <rect x="20" y="50" width="560" height="2" fill="#334155" />
        <g transform="translate(20, 80)">
          <text x="0" y="0" fill="#94a3b8" font-family="monospace" font-size="12">Call Stack: ${frame.call_stack.join(' > ')}</text>
          <text x="0" y="30" fill="#a7f3d0" font-family="monospace" font-size="12">Variables: ${JSON.stringify(frame.scope_variables)}</text>
        </g>
      </svg>
    `;
    container.innerHTML = svg_content;
  }

  public clear(container: HTMLElement): void {
    container.innerHTML = '';
  }
}
