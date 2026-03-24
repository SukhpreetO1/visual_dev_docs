# Linting & Formatting

## Overview

We maintain high code quality standards through automated linting and formatting. This ensures a consistent codebase and helps identify potential issues early in the development process.

## ESLint (Flat Config)

The project uses the modern ESLint flat configuration (`eslint.config.mjs`).

### Core Plugins

- **@eslint/js**: Base JavaScript rules.
- **typescript-eslint**: Comprehensive TypeScript support and rules.
- **eslint-plugin-react**: Standard React rules and best practices.
- **eslint-plugin-react-hooks**: Rules for ensuring correct React hook usage.
- **@next/eslint-plugin-next**: Next.js specific linting (used in the `web` app).

### Rules and Policies

- **No Implicit Any**: Require explicit typing for all variables and function parameters.
- **Unused Variables**: Warns on unused variables to keep the code clean.
- **Constant Styles**: Suggests the use of `const` over `let` where possible.
- **Formatting Conflicts**: `eslint-config-prettier` is used to disable ESLint rules that might conflict with Prettier.

## Prettier

Prettier is our mandatory code formatter.

### Configuration

- **Semi**: `true`
- **SingleQuote**: `true`
- **TrailingComma**: `all`
- **PrintWidth**: `80`

### Integration

- **Husky & Lint-staged**: Pre-commit hooks run `lint-staged`, which executes `eslint --fix` and `prettier --write` on all staged files before allowing a commit.

## Continuous Integration (CI)

Our CI pipeline runs the `pnpm lint` and `pnpm format:check` (planned) commands to ensure that all code pushed to the repository meets our quality standards.
