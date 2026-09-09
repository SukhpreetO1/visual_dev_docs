# Web (Next.js)

## 1. Framework

The `web` application is built using **Next.js 16**, leveraging the latest features of the **App Router** and **React 19**. It provides a high-performance, server-side rendered (SSR) and client-side interactive experience tailored for programming education.

## 2. Project Structure

The application follows the modern Next.js `src` directory convention:

```text
apps/web/
 ├ src/
 │   ├ app/                # App Router: layouts, pages, and components
 │   │   ├ layout.tsx      # Root layout (Navigation, Fonts, Global styles)
 │   │   ├ page.tsx        # Dashboard / Landing page
 │   │   └ (routes)/       # Dynamic and static route segments
 │   ├ components/         # Local, app-specific UI components
 │   ├ hooks/              # Custom React hooks (e.g., simulation state)
 │   └ lib/                # Utility functions, API clients, and constants
 ├ public/                 # Static assets (logos, icons)
 ├ next.config.ts          # Next.js specific configuration
 ├ tailwind.config.ts      # Tailwind CSS configuration
 └ tsconfig.json           # TypeScript configuration
```

## 3. Routing

The application uses **File-Based Routing** via the App Router:

- **`src/app/page.tsx`**: The main entry point (home).
- **`src/app/lessons/[id]/page.tsx`**: Dynamic route for individual lessons (Planned).
- **`src/app/playground/page.tsx`**: Dedicated workspace for code experimentation (Planned).

## 4. Interaction with Packages

The `web` app is the primary orchestrator for internal workspace packages:

- **`@visual-dev-docs/playground-engine`**: Embedded in playground pages to handle code editing and execution.
- **`@visual-dev-docs/simulation-core`**: Used via custom hooks to manage the lifecycle of active simulations.
- **`@visual-dev-docs/shared-types`**: Ensures all data fetched from the API and passed to engines is correctly typed.

## 5. UI Component Usage

Most UI elements are imported from the `@visual-dev-docs/ui-components` library to maintain design consistency.

- **Atomic Components**: `Button`, `Input`, `Select` used in forms and navigation.
- **Simulation Components**: `EditorWrapper` and `SimulationControls` used in lesson pages to wrap the interactive engines.
- **Styling**: Local styling is achieved using **Tailwind CSS 4**, adhering to the global design tokens defined in the UI package.

## 6. Visualization Rendering Flow

The `web` app manages the transition from code to visual feedback:

1.  **Code Input**: User types in a component powered by `playground-engine`.
2.  **Execution**: The engine executes code and emits state updates.
3.  **State Management**: A React hook in the `web` app listens to these updates and syncs them with the local React state.
4.  **Rendering**: The updated state is passed to a component wrapping the `visualization-engine`, which re-renders the Canvas or SVG output.

## 7. App Architecture Diagram

```mermaid
graph TD
    subgraph Browser_App [Web Application]
        Page[Next.js Page]
        Hook[useSimulation Hook]
        UILib[@visual-dev-docs/ui-components]
    end

    subgraph Engines [Internal Engines]
        PE[@visual-dev-docs/playground-engine]
        SC[@visual-dev-docs/simulation-core]
        VE[@visual-dev-docs/visualization-engine]
    end

    subgraph Server [Backend]
        API[NestJS API]
    end

    Page --> UILib
    Page --> Hook
    Hook <--> SC
    Hook <--> PE
    Hook <--> VE
    Page <--> API
```
