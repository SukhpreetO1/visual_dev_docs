# Visual Dev Docs

> **Visual Dev Docs**: An interactive learning platform that transforms programming documentation into immersive visual simulations.

---

## 📖 Project Overview

**Visual Dev Docs** is designed to bridge the gap between static technical documentation and hands-on programming experience. By integrating live code playgrounds with real-time visual simulations, the platform enables developers to explore complex algorithms, system architectures, and data structures in a deeply interactive environment.

The platform provides a unified workspace where users can edit code and immediately see its impact on a visual representation, making learning more intuitive and engaging.

---

## 🏗️ Monorepo Architecture

This project is structured as a modern pnpm-powered monorepo, using Turborepo for efficient build orchestration and task management.

```text
visual_dev_docs/
├ apps/                     # High-level applications
│ ├ api/                    # NestJS backend
│ └ web/                    # Next.js frontend
├ packages/                 # Shared internal packages
│ ├ playground-engine/      # Code execution and editor logic
│ ├ shared-types/           # Global TypeScript interfaces
│ ├ shared-utils/           # Common utility functions
│ ├ simulation-core/        # Simulation orchestration logic
│ ├ ui-components/          # Shared React design system
│ └ visualization-engine/   # SVG/Canvas rendering engine
├ prompts/                  # AI development prompts and guides
├ docs/                     # Comprehensive project documentation
├ turbo.json                # Turborepo task pipeline
├ pnpm-workspace.yaml       # Workspace definitions
└ package.json              # Root dependencies and scripts
```

### Major Folders

- **`apps/`**: Deployment-ready applications that provide the end-user experience.
- **`packages/`**: Modular, reusable libraries that power the core functionality of the platform.
- **`docs/`**: Centralized technical documentation for architecture, apps, and development workflows.
- **`prompts/`**: Structured prompts used for AI-assisted development and documentation.

---

## 📱 Applications

### [Web (Next.js)](./apps/web)

The primary user interface, built with Next.js 16 and React 19. It integrates the various simulation engines and documentation viewers into a unified, interactive web experience.

### [API (NestJS)](./apps/api)

The backend service responsible for data persistence, content management, and authentication, built on the robust NestJS framework.

Both applications consume the internal **`@visual-dev-docs/*`** packages to ensure consistency and speed up feature development.

---

## 📦 Packages

| Package                | Purpose                                                                                |
| :--------------------- | :------------------------------------------------------------------------------------- |
| `playground-engine`    | Manages the interactive code editor and runtime execution environment.                 |
| `shared-types`         | Provides a single source of truth for global TypeScript definitions and API contracts. |
| `shared-utils`         | A collection of pure utility functions for data transformation and async control.      |
| `simulation-core`      | The central brain for simulation lifecycle and state orchestration.                    |
| `ui-components`        | The shared React design system and primitive UI components.                            |
| `visualization-engine` | Specialized layer for mapping simulation states to high-performance visual outputs.    |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **Backend**: NestJS, Node.js
- **Monorepo Tools**: Turborepo, pnpm workspaces
- **Language**: TypeScript
- **Package Manager**: pnpm 10.x
- **Linting / Formatting**: ESLint (Flat Config), Prettier
- **Git Hooks**: Husky, Lint-staged, Commitlint

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version >= 18.x
- **pnpm**: Version >= 9.x (`npm install -g pnpm`)

### Installation

Clone the repository and install all dependencies:

```bash
pnpm install
```

### Run Development

Start the development servers for all applications and packages concurrently:

```bash
pnpm dev
```

This command runs the `turbo dev` task, starting the NestJS API and Next.js Web server with live reloading enabled.

---

## 🏗️ Build the Project

To generate production builds for every app and package in the workspace:

```bash
pnpm build
```

Turborepo orchestrates the build order, ensuring that internal package dependencies are built before the applications that rely on them.

---

## 📜 Project Scripts

| Command           | Description                                                       |
| :---------------- | :---------------------------------------------------------------- |
| `pnpm dev`        | Starts all apps and packages in development mode using Turborepo. |
| `pnpm build`      | Compiles every component in the workspace for production.         |
| `pnpm lint`       | Runs ESLint across the entire monorepo to ensure code quality.    |
| `pnpm format`     | Automatically formats all files using Prettier.                   |
| `pnpm type-check` | Verifies TypeScript type safety across all packages and apps.     |

---

## 🛠️ Development Workflow

1. **Install Dependencies**: Ensure your environment is up to date with `pnpm install`.
2. **Start Development**: Run `pnpm dev` to see your changes in real-time.
3. **Modify Packages**: Make changes in `packages/`. Turborepo and pnpm workspaces ensure these changes are instantly reflected in the `apps/`.
4. **Verification**: Run `pnpm lint` and `pnpm type-check` before submitting changes.
5. **Rebuild**: If necessary, run `pnpm build` to verify the production compilation.

---

## 🏁 Turborepo & Workspace

This monorepo leverages **pnpm workspaces** for dependency management and **Turborepo** for high-performance task execution.

- **Task Pipelines**: Defined in `turbo.json`, ensuring tasks like `build` run in the correct dependency order.
- **Caching**: Turborepo caches the outputs of your tasks, avoiding redundant work and significantly speeding up CI/CD and local builds.
- **Shared Packages**: Internal libraries are linked using the `workspace:*` protocol, allowing for seamless local development without publishing.

---

## 📊 Architecture Diagram

```mermaid
graph TD
    WebApp[web (Next.js)] --> API[api (NestJS)]
    WebApp --> UIComponents[@visual-dev-docs/ui-components]
    API --> SimulationCore[@visual-dev-docs/simulation-core]
    SimulationCore --> VisualizationEngine[@visual-dev-docs/visualization-engine]
    VisualizationEngine --> PlaygroundEngine[@visual-dev-docs/playground-engine]
```

---

## 📚 Documentation

Detailed technical documentation is available in the **[`docs/`](./docs)** folder:

- **[Architecture](./docs/architecture)**: System overview, monorepo design, and runtime flows.
- **[Apps](./docs/apps)**: Deep dives into the `api` and `web` applications.
- **[Packages](./docs/packages)**: Technical specifications for each shared package.
- **[Development](./docs/development)**: Setup guides, coding standards, and pipeline details.

---

## 🤝 Contributing

Contributions are welcome! Please ensure you:

1. Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
2. Run `pnpm lint` and `pnpm format` before committing.
3. Keep documentation up to date with any architectural changes.

---

## 📄 License

This project is licensed under the [ISC License](./LICENSE). (Placeholder)
