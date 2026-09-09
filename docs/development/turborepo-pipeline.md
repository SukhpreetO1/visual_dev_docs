# Turborepo Pipeline

## Overview

Turborepo is the engine that orchestrates our build and task management. It understands the dependencies between our apps and packages and optimizes the execution of tasks to save time.

## Core Tasks

These tasks are defined in the `turbo.json` file at the root.

| Task         | Dependencies  | Cacheable | Description                                   |
| :----------- | :------------ | :-------- | :-------------------------------------------- |
| `build`      | `^build`      | Yes       | Builds all packages and apps in order.        |
| `lint`       | `^lint`       | Yes       | Runs ESLint across all components.            |
| `dev`        | None          | No        | Starts development servers in watch mode.     |
| `type-check` | `^type-check` | Yes       | Runs TypeScript type checking workspace-wide. |

## Pipeline Logic

### 1. Build Order

The `^build` dependency ensures that Turborepo builds all internal package dependencies _before_ building the application that depends on them.

### 2. Caching Strategy

Turborepo caches the outputs and logs of any cacheable task.

- **Outputs**: Defined in `turbo.json` (e.g., `.next/**`, `dist/**`).
- **Inputs**: Automatically determined by the project structure and task configuration.
- **Local Cache**: Stored in the `.turbo` directory.
- **Remote Cache**: (Optional) Can be configured for faster CI/CD build times across the team.

### 3. Execution Concurrency

Turborepo executes as many independent tasks as possible in parallel, maximizing the utilization of your local CPU cores.

## Customizing the Pipeline

Any updates to the build or CI process should be reflected in the `turbo.json` file to ensure they are properly integrated into the workspace's task management system.
