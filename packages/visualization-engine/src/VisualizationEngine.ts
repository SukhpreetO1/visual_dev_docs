import { IVisualizationFrame } from '@visual-dev-docs/shared-types';
import { IRenderer } from './renderers/Renderer';
import { SvgRenderer } from './renderers/SvgRenderer';
import { CanvasRenderer } from './renderers/CanvasRenderer';
import * as Visualizations from './visualizations/Visualizations';

export class VisualizationEngine {
  private svg_renderer: SvgRenderer;
  private canvas_renderer: CanvasRenderer;

  constructor() {
    this.svg_renderer = new SvgRenderer();
    this.canvas_renderer = new CanvasRenderer();
  }

  public getRenderer(type: 'svg' | 'canvas' = 'svg'): IRenderer {
    return type === 'canvas' ? this.canvas_renderer : this.svg_renderer;
  }

  public renderHtml(type: string, frame: IVisualizationFrame): string {
    switch (type) {
      case 'for-loop': return Visualizations.renderForLoopViz(frame);
      case 'call-stack': return Visualizations.renderCallStackViz(frame);
      case 'array': return Visualizations.renderArrayViz(frame);
      case 'tree': return Visualizations.renderTreeViz(frame);
      case 'graph': return Visualizations.renderGraphViz(frame);
      case 'git-graph': return Visualizations.renderGitGraphViz(frame);
      case 'docker': return Visualizations.renderDockerViz(frame);
      case 'pipeline': return Visualizations.renderPipelineViz(frame);
      default: return Visualizations.renderForLoopViz(frame);
    }
  }
}

export * from './renderers/Renderer';
export * from './renderers/SvgRenderer';
export * from './renderers/CanvasRenderer';
export * from './visualizations/Visualizations';
