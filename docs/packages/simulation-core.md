# Simulation Core

## 1. Purpose

The `@visual-dev-docs/simulation-core` is the central brain of all interactive documentation. It orchestrates the simulation lifecycle, manages the global state of the active simulation, and provides a messaging layer for engine communication.

## 2. Responsibilities

- **Lifecycle Orchestration**: Standardizing `init`, `start`, `pause`, `stop`, and `reset` behaviors.
- **State Management**: Keeping the source-of-truth for the simulation's current state.
- **Event Bus**: Providing a pub/sub system for other components to react to state changes.
- **Simulation Logic**: Driving the progression of the simulation based on its configuration.

## 3. Public APIs

- `SimulationBase`: Base class for creating custom simulation types.
- `createSimulation(config: SimulationConfig): SimulationInstance`: Factory for initializing a new simulation.
- `subscribe(eventName: string, handler: (data: any) => void)`: Subscribe to simulation-specific events.

## 4. Folder Structure

```text
packages/simulation-core/
 ├ src/
 │   ├ index.ts          # Main exports
 │   ├ state/            # State management logic
 │   ├ events/           # Event bus and messaging
 │   └ core/             # Base classes and orchestration
 ├ package.json         # Package configuration
 └ tsconfig.json        # TypeScript configuration
```

## 5. Dependencies

- **Internal**:
  - `@visual-dev-docs/shared-types`: For state and config definitions.
  - `@visual-dev-docs/shared-utils`: For low-level helpers.
- **External**: None.

## 6. Example Usage

```typescript
import { createSimulation } from '@visual-dev-docs/simulation-core';

const sim = createSimulation({
  type: 'algorithm-step-by-step',
  initialState: { nodes: [] },
});

sim.on('stateUpdate', (newState) => {
  console.log('New Simulation State:', newState);
});

sim.start();
```

## 7. Integration

The `simulation-core` is the link between the `playground-engine` (code execution) and the `visualization-engine` (visual feedback). It takes the high-level commands from the playground and broadcasts state updates that the visualization engine renders to the user.
