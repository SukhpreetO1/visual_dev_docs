# UI Components

## 1. Purpose

The `@visual-dev-docs/ui-components` package provides a shared, highly-accessible, and visually consistent set of React components for the Visual Dev Docs platform. It serves as our internal design system.

## 2. Responsibilities

- **Design Consistency**: Implementing the Visual Dev Docs design language (colors, typography, spacing).
- **Accessibility**: Ensuring all components meet WCAG standards for inclusive education.
- **UI Building Blocks**: Providing primitive elements like `Button`, `Input`, `Card`, and `Layout`.
- **Simulation UI**: Specialized components for simulation controls, progress bars, and stats displays.

## 3. Public APIs

- `Button`, `Input`, `Checkbox`, `Select`: Atomic UI elements.
- `EditorWrapper`: A specialized layout component for embedding code editors.
- `SimulationControls`: High-level component for pause/play/step actions.

## 4. Folder Structure

```text
packages/ui-components/
 ├ src/
 │   ├ index.ts          # Main exports
 │   ├ atoms/            # Simple UI primitives
 │   ├ molecules/        # Composite components
 │   └ hooks/            # UI-specific React hooks
 ├ package.json         # Package configuration
 └ tsconfig.json        # TypeScript configuration
```

## 5. Dependencies

- **Internal**:
  - `@visual-dev-docs/shared-types`: For props and state types.
  - `@visual-dev-docs/shared-utils`: For small internal helpers.
- **External**:
  - `react`: Core UI framework.
  - `framer-motion`: For smooth micro-animations.
  - `lucide-react`: For a consistent iconography set.

## 6. Example Usage

```typescript
import { Button, SimulationControls } from '@visual-dev-docs/ui-components';

const MySimulationPage = () => (
  <div>
    <SimulationControls onPause={() => console.log('Paused')} />
    <Button variant="primary">Next Step</Button>
  </div>
);
```

## 7. Integration

The `ui-components` package is extensively used in the `web` application. It provides the visual shell that users interact with, and many components are designed to bind directly to the states emitted by the `simulation-core` and `playground-engine`.
