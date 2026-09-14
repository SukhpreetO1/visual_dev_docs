export interface ISandboxMessage {
  type: 'EXECUTE' | 'CANCEL' | 'PING';
  code: string;
  language: string;
  execution_id: string;
}

export interface ISandboxResponse {
  type: 'RESULT' | 'ERROR' | 'PONG';
  execution_id: string;
  stdout: string;
  stderr: string;
  execution_time_ms: number;
  memory_used_bytes: number;
  frames?: Array<{
    frame_index: number;
    line_number: number;
    highlights: string[];
    call_stack: string[];
    scope_variables: Record<string, unknown>;
  }>;
}
