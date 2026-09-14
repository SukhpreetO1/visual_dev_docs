import { IExecutionResult, IVisualizationFrame } from '@visual-dev-docs/shared-types';
import { EventBus, SimulationEvent } from './EventBus';
import { SimulationState } from './SimulationState';
import { StepEngine } from './StepEngine';

export class SimulationCore {
  private event_bus: EventBus;
  private state_container: SimulationState;
  private step_engine: StepEngine;
  private timer_id: ReturnType<typeof setInterval> | null = null;

  constructor(simulation_id = 'default-sim') {
    this.event_bus = new EventBus();
    this.state_container = new SimulationState(simulation_id);
    this.step_engine = new StepEngine();
  }

  public getEventBus(): EventBus {
    return this.event_bus;
  }

  public loadExecution(result: IExecutionResult): void {
    const frames = this.step_engine.processExecutionResult(result);
    this.state_container.setFrames(frames);
    this.event_bus.publish(SimulationEvent.STATE_CHANGE, this.state_container.getState());
  }

  public play(interval_ms = 500): void {
    if (this.timer_id) clearInterval(this.timer_id);
    this.state_container.setStatus('RUNNING');
    this.event_bus.publish(SimulationEvent.STATE_CHANGE, this.state_container.getState());

    this.timer_id = setInterval(() => {
      const state = this.state_container.getState();
      if (state.current_step < state.total_steps - 1) {
        this.stepForward();
      } else {
        this.pause();
        this.state_container.setStatus('COMPLETED');
        this.event_bus.publish(SimulationEvent.PLAYBACK_COMPLETE, this.state_container.getState());
      }
    }, interval_ms);
  }

  public pause(): void {
    if (this.timer_id) {
      clearInterval(this.timer_id);
      this.timer_id = null;
    }
    this.state_container.setStatus('PAUSED');
    this.event_bus.publish(SimulationEvent.STATE_CHANGE, this.state_container.getState());
  }

  public reset(): void {
    this.pause();
    this.state_container.setStep(0);
    this.state_container.setStatus('IDLE');
    this.event_bus.publish(SimulationEvent.STATE_CHANGE, this.state_container.getState());
  }

  public stepForward(): void {
    const state = this.state_container.getState();
    if (state.current_step < state.total_steps - 1) {
      this.state_container.setStep(state.current_step + 1);
      this.event_bus.publish(SimulationEvent.STEP_CHANGE, this.state_container.getCurrentFrame());
      this.event_bus.publish(SimulationEvent.STATE_CHANGE, this.state_container.getState());
    }
  }

  public stepBackward(): void {
    const state = this.state_container.getState();
    if (state.current_step > 0) {
      this.state_container.setStep(state.current_step - 1);
      this.event_bus.publish(SimulationEvent.STEP_CHANGE, this.state_container.getCurrentFrame());
      this.event_bus.publish(SimulationEvent.STATE_CHANGE, this.state_container.getState());
    }
  }

  public getCurrentFrame(): IVisualizationFrame | null {
    return this.state_container.getCurrentFrame();
  }
}

export * from './EventBus';
export * from './SimulationState';
export * from './StepEngine';
