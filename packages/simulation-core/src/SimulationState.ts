import { ISimulationState, IVisualizationFrame } from '@visual-dev-docs/shared-types';

export class SimulationState {
  private state: ISimulationState;
  private frames: IVisualizationFrame[] = [];

  constructor(simulation_id: string) {
    this.state = {
      simulation_id,
      status: 'IDLE',
      current_step: 0,
      total_steps: 0,
      variables: {},
      timestamp: Date.now()
    };
  }

  public getState(): ISimulationState {
    return { ...this.state };
  }

  public setFrames(frames: IVisualizationFrame[]): void {
    this.frames = frames;
    this.state.total_steps = frames.length;
    this.state.current_step = 0;
    this.state.timestamp = Date.now();
  }

  public getFrames(): IVisualizationFrame[] {
    return this.frames;
  }

  public getCurrentFrame(): IVisualizationFrame | null {
    if (this.state.current_step >= 0 && this.state.current_step < this.frames.length) {
      return this.frames[this.state.current_step];
    }
    return null;
  }

  public setStep(step: number): void {
    if (step >= 0 && step < this.state.total_steps) {
      this.state.current_step = step;
      const current_frame = this.frames[step];
      if (current_frame) {
        this.state.variables = current_frame.scope_variables;
      }
      this.state.timestamp = Date.now();
    }
  }

  public setStatus(status: 'IDLE' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'FAILED'): void {
    this.state.status = status;
    this.state.timestamp = Date.now();
  }
}
