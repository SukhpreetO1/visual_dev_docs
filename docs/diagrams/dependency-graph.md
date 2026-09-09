# Dependency Graph

## Workspace Dependencies

The following graph illustrates how the various apps and packages in the monorepo depend on each other.

```mermaid
graph LR
    subgraph Applications
        api
        web
    end

    subgraph Core Engines
        playground-engine
        visualization-engine
        simulation-core
    end

    subgraph Shared Utilities
        shared-types
        shared-utils
        ui-components
    end

    %% Application Dependencies
    web --> playground-engine
    web --> visualization-engine
    web --> ui-components

    api --> shared-types
    api --> shared-utils

    %% Engine Dependencies
    playground-engine --> simulation-core
    visualization-engine --> simulation-core
    simulation-core --> shared-types

    %% Shared Dependencies
    playground-engine --> shared-types
    visualization-engine --> shared-types
    ui-components --> shared-types

    playground-engine --> shared-utils
    visualization-engine --> shared-utils
    ui-components --> shared-utils
```

## Description

- **Applications**: High-level apps that consume the internal packages.
- **Core Engines**: Specialized packages that provide simulation and visualization capabilities.
- **Shared Utilities**: The base layer of the monorepo, providing types, helper functions, and UI elements.
