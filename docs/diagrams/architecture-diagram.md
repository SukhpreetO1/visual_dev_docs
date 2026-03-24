# Architecture Diagram

## High-Level System Architecture

The following diagram represents the core components of the Visual Dev Docs platform and their primary interactions.

```mermaid
graph TB
    subgraph Client [Client Side]
        Web[web (Next.js)]
        subgraph Internal_Engines [Internal Engines]
            PE[playground-engine]
            VE[visualization-engine]
            SC[simulation-core]
        end
    end

    subgraph Backend [Server Side]
        API[api (NestJS)]
        DB[(Database)]
    end

    Web <--> API
    API <--> DB

    Web --- PE
    Web --- VE
    PE --- SC
    VE --- SC
```

## Description

1.  **Web (Next.js)**: The main application that serves the user interface and handles client-side routing and state.
2.  **Internal Engines**: A suite of shared packages that manage the simulation lifecycle, code editing, and rendering.
3.  **API (NestJS)**: The backend service for data persistence, authentication, and logic.
4.  **Database**: Stores persistent information such as lesson content, user profiles, and saved playgrounds.
