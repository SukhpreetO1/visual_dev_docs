import { IExecutionResult } from '@visual-dev-docs/shared-types';
import { ICodeRunner } from './WebWorkerRunner';

export class ServerRunner implements ICodeRunner {
  private api_endpoint: string;

  constructor(api_endpoint = '/v1/execute') {
    this.api_endpoint = api_endpoint;
  }

  async run(code: string, language: string): Promise<IExecutionResult> {
    const start_time = Date.now();
    try {
      const response = await fetch(this.api_endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      });

      if (!response.ok) {
        throw new Error(`Server execution failed with HTTP ${response.status}`);
      }

      const res_data = await response.json();
      return res_data.data || res_data;
    } catch (err: unknown) {
      const error_message = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        stdout: '',
        stderr: error_message,
        execution_time_ms: Date.now() - start_time,
        memory_used_bytes: 0
      };
    }
  }
}
