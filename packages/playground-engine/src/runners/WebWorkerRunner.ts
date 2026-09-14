import { IExecutionResult, IVisualizationFrame } from '@visual-dev-docs/shared-types';

export interface ICodeRunner {
  run(code: string, language: string): Promise<IExecutionResult>;
}

export class WebWorkerRunner implements ICodeRunner {
  async run(code: string, _language?: string): Promise<IExecutionResult> {
    const start_time = Date.now();
    const frames: IVisualizationFrame[] = [];
    const logs: string[] = [];

    try {
      // Basic JavaScript step & console evaluation simulation
      const console_log_hook = (...args: unknown[]) => {
        logs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      };

      const custom_scope = {
        console: { log: console_log_hook, error: console_log_hook, warn: console_log_hook }
      };

      const fn = new Function(...Object.keys(custom_scope), code);
      fn(...Object.values(custom_scope));

      // Parse code lines for frame generation simulation
      const lines = code.split('\n');
      lines.forEach((line, idx) => {
        if (line.trim().length > 0) {
          frames.push({
            frame_index: idx,
            line_number: idx + 1,
            highlights: [`line-${idx + 1}`],
            call_stack: ['main()'],
            scope_variables: { line_content: line.trim() }
          });
        }
      });

      return {
        success: true,
        stdout: logs.join('\n'),
        stderr: '',
        execution_time_ms: Date.now() - start_time,
        memory_used_bytes: 1024 * 1024,
        visualization_frames: frames
      };
    } catch (err: unknown) {
      const error_message = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        stdout: logs.join('\n'),
        stderr: error_message,
        execution_time_ms: Date.now() - start_time,
        memory_used_bytes: 0,
        visualization_frames: frames
      };
    }
  }
}
