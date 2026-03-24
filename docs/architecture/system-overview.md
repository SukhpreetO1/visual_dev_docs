# System Overview

## 1. High-Level Description

**Visual Dev Docs** is a next-generation interactive learning platform designed to bridge the gap between static technical documentation and hands-on programming experience. By integrating live code playgrounds with real-time visual simulations, the platform allows developers to explore complex algorithms, system architectures, and data structures in a deeply immersive environment.

## 2. Purpose of the Monorepo

The project is structured as a **PNPM-powered monorepo** using **Turborepo** for several strategic reasons:

- **Code Sharing**: Seamlessly share TypeScript types, utility functions, and UI components across the frontend and backend.
- **Unified Tooling**: Enforce consistent linting, formatting, and build pipelines across all workspace members.
- **Granular Stability**: Develop and test individual engines (simulation, visualization, playground) in isolation while ensuring they integrate perfectly.
- **Efficient Orchestration**: Optimize build and development times using Turborepo's intelligent task caching.

## 3. Architecture Layers

The system is organized into four distinct layers:

1.  **Application Layer**: Contains the high-level `web` (Next.js) and `api` (NestJS) applications.
2.  **Engine Layer**: The core logic of the platform, consisting of specialized packages for `simulation`, `visualization`, and `playground` management.
3.  **Shared UI Layer**: A centralized design system provided by the `ui-components` package.
4.  **Foundation Layer**: Low-level `shared-types` and `shared-utils` that provide the bedrock for the entire workspace.

## 4. Component Interactions

The applications consume the engines to provide the user experience:

- The **Web App** imports the `playground-engine` and `visualization-engine` to render interactive lessons.
- The **API** uses `shared-types` and `shared-utils` to ensure that the data it serves is consistent with what the frontend expects.

## 5. Engine Interaction: Simulation & Visualization

The `simulation-core` acts as the orchestrator. When a user interacts with the `playground-engine` (by editing or running code), the playground communicates those changes to the `simulation-core`. The core then updates the internal state and broadcasts events to the `visualization-engine`, which re-renders the graphical output (SVG/Canvas).

## 6. System Architecture Diagram

```mermaid
graph TD
    WebApp[web (Next.js)] --> API[api (NestJS)]
    WebApp --> UIComponents[@visual-dev-docs/ui-components]
    API --> SimulationCore[@visual-dev-docs/simulation-core]
    SimulationCore --> VisualizationEngine[@visual-dev-docs/visualization-engine]
    VisualizationEngine --> PlaygroundEngine[@visual-dev-docs/playground-engine]
```

## 7. Component Breakdown

- **web (Next.js)**: The primary frontend application providing the UI, routing, and lesson orchestration.
- **api (NestJS)**: The backend service for data persistence, content management, and authentication.
- **@visual-dev-docs/ui-components**: The shared React design system and primitive components.
- **@visual-dev-docs/simulation-core**: The central brain for all simulations, managing state and event dispatching.
- **@visual-dev-docs/visualization-engine**: The specialized layer for rendering simulation states to SVG/Canvas.
- **@visual-dev-docs/playground-engine**: The interactive code execution environment and editor integration.
- **@visual-dev-docs/shared-types**: Global TypeScript definitions and API contracts.
- **@visual-dev-docs/shared-utils**: Common logic and pure utility functions.
