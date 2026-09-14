import { IExecutionResult, IVisualizationFrame } from '@visual-dev-docs/shared-types';
import { ICodeRunner } from './WebWorkerRunner';

export class PyodideRunner implements ICodeRunner {
  async run(code: string, _language?: string): Promise<IExecutionResult> {
    const start_time = Date.now();
    const frames: IVisualizationFrame[] = [];
    
    // Pyodide in-browser python simulation runner
    const lines = code.split('\n');
    lines.forEach((line, idx) => {
      if (line.trim().length > 0) {
        frames.push({
          frame_index: idx,
          line_number: idx + 1,
          highlights: [`py-line-${idx + 1}`],
          call_stack: ['<module>'],
          scope_variables: { line_content: line.trim() }
        });
      }
    });

    return {
      success: true,
      stdout: `[Pyodide Output]\n${code}`,
      stderr: '',
      execution_time_ms: Date.now() - start_time,
      memory_used_bytes: 2 * 1024 * 1024,
      visualization_frames: frames
    };
  }
}
