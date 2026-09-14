/**
 * Simulation state, events, execution result, and frame definitions.
 */
/**
 * State snapshot of an active simulation engine instance.
 */
export interface ISimulationState {
    /** Simulation engine session ID */
    simulation_id: string;
    /** Current execution status */
    status: 'IDLE' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'FAILED';
    /** Current step or instruction index */
    current_step: number;
    /** Total step count in simulation */
    total_steps: number;
    /** Variable / memory state dictionary */
    variables: Record<string, unknown>;
    /** Timestamp when state was sampled */
    timestamp: number;
}
/**
 * Discrete event emitted during simulation playback.
 */
export interface ISimulationEvent {
    /** Unique event identifier */
    id: string;
    /** Event classification key (e.g. VARIABLE_CHANGE, CALL_STACK_PUSH) */
    event_type: string;
    /** Step index when event occurred */
    step_number: number;
    /** Associated payload details */
    payload: Record<string, unknown>;
    /** Timestamp when event fired */
    created_at: Date;
}
/**
 * Output result of code execution submitted to simulation engine.
 */
export interface IExecutionResult {
    /** Indicates whether code executed without uncaught errors */
    success: boolean;
    /** Standard output stream string */
    stdout: string;
    /** Standard error stream string */
    stderr: string;
    /** Execution wall-clock time in milliseconds */
    execution_time_ms: number;
    /** Memory consumed in bytes */
    memory_used_bytes: number;
    /** Array of visual animation frames generated */
    visualization_frames?: IVisualizationFrame[];
}
/**
 * Renderable frame for UI code step visualization.
 */
export interface IVisualizationFrame {
    /** Sequence index of frame */
    frame_index: number;
    /** Active line number in source file */
    line_number: number;
    /** Highlighted element node IDs or variable pointers */
    highlights: string[];
    /** Call stack frame representations */
    call_stack: string[];
    /** State variables visible at this frame */
    scope_variables: Record<string, unknown>;
}
