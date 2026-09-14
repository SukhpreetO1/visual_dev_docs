import { IExecutionResult, IVisualizationFrame } from '@visual-dev-docs/shared-types';

export class StepEngine {
  public processExecutionResult(result: IExecutionResult): IVisualizationFrame[] {
    if (result.visualization_frames && result.visualization_frames.length > 0) {
      return result.visualization_frames;
    }

    // Default frames from stdout / stderr if frames missing
    const frames: IVisualizationFrame[] = [];
    const lines = (result.stdout + (result.stderr ? `\n${result.stderr}` : '')).split('\n');

    lines.forEach((line, idx) => {
      frames.push({
        frame_index: idx,
        line_number: idx + 1,
        highlights: [`step-${idx + 1}`],
        call_stack: ['main()'],
        scope_variables: { stdout_line: line }
      });
    });

    return frames;
  }
}
