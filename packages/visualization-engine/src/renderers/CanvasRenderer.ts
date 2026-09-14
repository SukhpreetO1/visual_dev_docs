import { IVisualizationFrame } from '@visual-dev-docs/shared-types';
import { IRenderer } from './Renderer';

export class CanvasRenderer implements IRenderer {
  public render(container: HTMLElement, frame: IVisualizationFrame): void {
    let canvas = container.querySelector('canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 200;
      canvas.className = 'w-full h-full bg-slate-950 rounded-lg';
      container.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '14px monospace';
      ctx.fillText(`Canvas Frame #${frame.frame_index + 1} (Line ${frame.line_number})`, 20, 40);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '12px monospace';
      ctx.fillText(`Stack: ${frame.call_stack.join(' -> ')}`, 20, 80);
      ctx.fillText(`Scope: ${JSON.stringify(frame.scope_variables)}`, 20, 120);
    }
  }

  public clear(container: HTMLElement): void {
    container.innerHTML = '';
  }
}
