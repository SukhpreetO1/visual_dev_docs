# Scripts Inventory

## Root Scripts

These scripts are defined in the root `package.json` and are meant to be run from the project root.

| Script       | Command                | Description                                               |
| :----------- | :--------------------- | :-------------------------------------------------------- |
| `dev`        | `turbo dev`            | Start all apps and packages in development mode.          |
| `build`      | `turbo build`          | Build all components for production.                      |
| `lint`       | `turbo lint`           | Run ESLint across the entire workspace.                   |
| `format`     | `prettier --write ...` | Run Prettier across the entire workspace.                 |
| `type-check` | `turbo type-check`     | Run TypeScript type checking across the entire workspace. |
| `prepare`    | `husky`                | Initialize Git hooks.                                     |

## Package-Level Scripts

Each app and package also contains its own scripts for more granular control.

### Apps (`apps/web` & `apps/api`)

- `dev`: Start the application in development mode.
- `build`: Generate the application build.
- `start`: Run the production build.
- `test`: Run workspace-specific tests.

### Packages (`packages/*`)

- `build`: Compile the package using `tsc`.
- `dev`: Start `tsc` in watch mode.
- `lint`: Run ESLint for this package only.
- `type-check`: Run `tsc --noEmit` to verify type safety.
