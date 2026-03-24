# Monorepo Architecture

## Overview

Visual Dev Docs is structured as a pnpm-powered monorepo, using Turborepo for build orchestration and task management. This architecture enables efficient code sharing, consistent tooling, and scalable development.

## Project Structure

```text
visual_dev_docs/
 ├ apps/                     # High-level applications
 │   ├ api/                  # NestJS backend
 │   └ web/                  # Next.js frontend
 ├ packages/                 # Shared internal packages
 │   ├ playground-engine/    # Client-side editor & execution logic
 │   ├ shared-types/         # Global TypeScript interfaces
 │   ├ shared-utils/         # Common utility functions
 │   ├ simulation-core/      # Simulation orchestration
 │   ├ ui-components/        # Design system & visual elements
 │   └ visualization-engine/ # State to visual mapping engine
 ├ .husky/                   # Git hooks
 ├ eslint.config.mjs         # Global ESLint configuration (Flat Config)
 ├ package.json              # Root dependencies and scripts
 ├ pnpm-workspace.yaml       # Workspace definitions
 ├ tsconfig.json             # Root TypeScript configuration
 └ turbo.json                # Turborepo task pipeline
```

## Tooling & Workflows

### 1. Workspace Management

We use **pnpm workspaces** to manage internal dependencies. Packages are linked using the `workspace:*` protocol, ensuring that local changes are immediately available to other workspace members without needing to publish.

### 2. Task Orchestration

**Turborepo** is the brain of our build system. It manages task dependencies (e.g., ensuring packages are built before apps) and provides sophisticated caching to speed up local and CI builds.

### 3. Code Quality & Standards

- **ESLint**: Modern flat configuration for project-wide consistency.
- **Prettier**: Automated formatting for all supported file types.
- **Husky & Lint-staged**: Pre-commit hooks to run linting and formatting on changed files.
- **Commitlint**: Enforces conventional commit messages.

### 4. Shared Configurations

The root directory contains base configurations (ESLint, TypeScript, Prettier) that are extended by individual apps and packages, reducing duplication and ensuring a unified developer experience.
