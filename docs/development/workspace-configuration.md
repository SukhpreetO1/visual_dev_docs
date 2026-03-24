# Workspace Configuration

## Editor Support

We recommend using **Visual Studio Code** for the best development experience.

### Recommended Extensions

- **ESLint**: Integration with our flat configuration.
- **Prettier**: Automated formatting on save.
- **Tailwind CSS IntelliSense**: Autocomplete and preview for Tailwind classes.
- **TypeScript Hero**: Helper for managing imports and exports.

## Core Configurations

### TypeScript

The project uses a base `tsconfig.json` at the root, which is extended by each app and package to ensure consistent compiler settings while allowing for specific overrides.

### ESLint (Flat Config)

We use the modern ESLint flat configuration (`eslint.config.mjs`) for project-wide consistency.

- **Rules**: Enforces best practices for React, TypeScript, and general JavaScript.
- **Integration**: Next.js and NestJS specific plugins are integrated where applicable.

### Prettier

A standard `.prettierrc` file defines our formatting preferences:

- **Semi-colons**: Enabled.
- **Single Quotes**: Enabled.
- **Trailing Commas**: All.
- **Print Width**: 80 characters.

## Git Workflow

- **Conventional Commits**: Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
- **Hooks**: Husky runs `lint-staged` on every commit to ensure only linted and formatted code enters the repository.
