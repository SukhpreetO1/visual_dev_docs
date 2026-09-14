import { IVisualizationFrame } from '@visual-dev-docs/shared-types';

export interface IRenderer {
  render(container: HTMLElement, frame: IVisualizationFrame): void;
  clear(container: HTMLElement): void;
}
