# Setup & Installation

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: Version >= 18.x (LTS recommended)
- **pnpm**: Version >= 9.x (Package Manager)
- **Git**: For version control

## Initial Setup

1.  **Clone the Repository**:

    ```bash
    git clone <repository-url>
    cd visual_dev_docs
    ```

2.  **Install Dependencies**:

    ```bash
    pnpm install
    ```

3.  **Prepare Husky Hooks**:
    ```bash
    pnpm prepare
    ```

## Running the Project

### Local Development

To start all applications and packages in development mode:

```bash
pnpm dev
```

This will trigger the Turborepo `dev` pipeline, which starts the NestJS API and Next.js Web server concurrently.

### Building for Production

To generate production builds for all components:

```bash
pnpm build
```

---

## Troubleshooting

- **pnpm Store Issues**: If you encounter dependency conflicts, try running `pnpm store prune` followed by `pnpm install`.
- **Turbo Cache**: To clear the local Turborepo cache, delete the `.turbo` directory at the root of the project.
