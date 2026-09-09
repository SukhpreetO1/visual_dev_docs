# Visualization Engine

## 1. Purpose

The `@visual-dev-docs/visualization-engine` is the visual representation layer of all simulations. It translates simulation-core state updates into meaningful graphical representations, whether through Canvas, SVG, or other modern web rendering technologies.

## 2. Responsibilities

- **Rendering Logic**: Transforming abstract simulation snapshots into visual elements.
- **Micro-Animations**: Providing fluid transitions between simulation states.
- **User Interaction Layer**: Handling panning, zooming, and direct selection within the visualization.
- **State-to-Visual Mapping**: Standardizing how specific simulation types are rendered.

## 3. Public APIs

- `VisualizationRenderer`: Base class for creating a custom visual output.
- `render(state: SimulationState)`: Key function for re-drawing based on a simulation state.
- `registerRenderer(simType: string, renderer: Function)`: Factory for adding support for new simulation types.

## 4. Folder Structure

```text
packages/visualization-engine/
 ├ src/
 │   ├ index.ts          # Main exports
 │   ├ renderers/        # Individual simulation type renderers
 │   ├ canvas/           # Canvas-specific utilities
 │   ├ svg/              # SVG-specific components
 │   └ animation/        # Animation and transition helpers
 ├ package.json         # Package configuration
 └ tsconfig.json        # TypeScript configuration
```

## 5. Dependencies

- **Internal**:
  - `@visual-dev-docs/simulation-core`: For state consumption.
  - `@visual-dev-docs/shared-types`: For state snapshots.
  - `@visual-dev-docs/shared-utils`: For small mapping helpers.
- **External**:
  - `framer-motion`: For animation support.
  - `d3` (Planned): Targeted use for data-driven visual mappings.

## 6. Example Usage

```typescript
import { VisualizationRenderer } from '@visual-dev-docs/visualization-engine';

const renderer = new VisualizationRenderer({
  container: '#simulation-viewport',
  type: 'algorithm-steps',
});

simulationCore.on('stateUpdate', (newState) => {
  renderer.render(newState);
});
```

## 7. Integration

The `visualization-engine` acts as a passive consumer of the `simulation-core`. It is the visual companion to the `playground-engine`, showing the user the impact of their code changes in real-time. It is used primarily in the `web` application's lesson and simulation pages.
