export type EventCallback = (payload: unknown) => void;

export enum SimulationEvent {
  STATE_CHANGE = 'STATE_CHANGE',
  STEP_CHANGE = 'STEP_CHANGE',
  VARIABLE_UPDATE = 'VARIABLE_UPDATE',
  PLAYBACK_COMPLETE = 'PLAYBACK_COMPLETE',
  ERROR = 'ERROR'
}

export class EventBus {
  private listeners: Map<string, Set<EventCallback>> = new Map();

  public subscribe(event: string, callback: EventCallback): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);

    return () => {
      this.listeners.get(event)?.delete(callback);
    };
  }

  public publish(event: string, payload: unknown): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach(cb => cb(payload));
    }
  }

  public clear(): void {
    this.listeners.clear();
  }
}
