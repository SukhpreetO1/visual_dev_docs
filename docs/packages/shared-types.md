# Shared Types

## 1. Purpose

The `@visual-dev-docs/shared-types` package acts as the single source of truth for all data structures and interfaces used throughout the Visual Dev Docs monorepo. It ensures type safety and consistency across the frontend, backend, and all internal engines.

## 2. Responsibilities

- **Contract Definition**: Defining the interfaces for all data exchanged between the API and the Web app.
- **Engine Typing**: Providing consistent types for simulation state, events, and configuration across all engine packages.
- **Global Constants/Enums**: Maintaining enumerations for common system states, roles, and categories.

## 3. Public APIs

- `Lesson`: Interface for lesson content and metadata.
- `SimulationState`: Standard structure for simulation snapshots.
- `EditorConfig`: Configuration options for the playground environment.
- `ApiError`: Standardized error response structure.

## 4. Folder Structure

```text
packages/shared-types/
 ├ src/
 │   ├ index.ts          # Main exports
 │   ├ api/              # API request/response types
 │   ├ simulation/       # Engine and simulation types
 │   └ constants/        # Global enums and constants
 ├ package.json         # Package configuration
 └ tsconfig.json        # TypeScript configuration
```

## 5. Dependencies

- **Internal**: None (This is a base-level package).
- **External**: None.

## 6. Example Usage

```typescript
import { Lesson, SimulationState } from '@visual-dev-docs/shared-types';

const currentLesson: Lesson = {
  id: 'lesson-1',
  title: 'Introduction to Algorithms',
  content: '...',
};

const initialState: SimulationState = {
  status: 'idle',
  step: 0,
  data: {},
};
```

## 7. Integration

`shared-types` is imported by every other package and application in the workspace. It is the dependency that binds the `api` (NestJS) and `web` (Next.js) together, ensuring that both ends of the communication stack are always in sync.
