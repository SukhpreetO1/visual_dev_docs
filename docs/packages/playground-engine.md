# Playground Engine

## 1. Purpose

The `@visual-dev-docs/playground-engine` is designed to provide a robust, interactive code execution and editing environment. It serves as the primary interface for users to experiment with code and see real-time results within the Visual Dev Docs platform.

## 2. Responsibilities

- **Editor Management**: Orchestrating the state and behavior of the code editor (e.g., Monaco).
- **Runtime Execution**: Managing the lifecycle of user-provided code in a safe, sandboxed environment.
- **State Synchronization**: Bridging the gap between the code editor's state and the simulation core's requirements.
- **Error Handling**: Intercepting and formatting syntax and runtime errors for display in the UI.

## 3. Public APIs

- `PlaygroundInstance`: Main class for managing a playground session.
- `execute(code: string): Promise<ExecutionResult>`: Executes a block of code and returns the result or error.
- `onStateChange(callback: (state: any) => void)`: Subscriber for editor state updates.

## 4. Folder Structure

```text
packages/playground-engine/
 ├ src/
 │   ├ index.ts          # Package entry point
 │   ├ runtime/          # Execution logic and sandboxing
 │   ├ editor/           # Editor-specific configurations
 │   └ types/            # Internal engine-specific types
 ├ package.json         # Package configuration
 └ tsconfig.json        # TypeScript configuration
```

## 5. Dependencies

- **Internal**:
  - `@visual-dev-docs/simulation-core`: For state orchestration.
  - `@visual-dev-docs/shared-types`: For common data structures.
  - `@visual-dev-docs/shared-utils`: For helper functions.
- **External**:
  - `monaco-editor` (Planned): For the high-level editing interface.

## 6. Example Usage

```typescript
import { PlaygroundInstance } from '@visual-dev-docs/playground-engine';

const playground = new PlaygroundInstance({
  language: 'javascript',
  initialCode: 'console.log("Hello Visual Dev Docs!");',
});

playground.execute().then((result) => {
  console.log('Execution Finished:', result);
});
```

## 7. Integration

The `playground-engine` is a critical consumer of `simulation-core`. It translates code-level changes into simulation events that are then processed by the core and visualized by the `visualization-engine`. It is primarily used within the `web` application's interactive components.
