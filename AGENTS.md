# Coding Standards & Agent Guidelines (Project Template)

> Drop this file into the root of any new project as `agents.md`. Update the project name below and remove/adjust any section marked **(if applicable)** that doesn't apply to this specific project.

**Project Name**: Visual Dev Docs

## 1. MCP Capability Check (MANDATORY FIRST STEP)

- Before writing code in any language (TypeScript/JavaScript, Python, SQL/Prisma, Shell, Docker), **ALWAYS check available MCP tools** first for language-specific inspect/eval/schema capabilities.
- Use MCP servers (such as Neon PostgreSQL inspector, Next devtools, Chrome DevTools) to verify database schema definitions, live route states, and API endpoints before committing code edits.

## 2. Strict Technical Conventions

### 2.1 Naming Conventions

- **Files & Classes**: `PascalCase` (e.g. `QueryBuilder.ts`, `XBookmarkWorker.py`).
- **Functions**: `camelCase` (e.g. `getBackupEligibleGroups`).
- **Variables**: `snake_case` (e.g. `user_id`, `backup_status`, `deleted_at`, `share_slug`).
- **Database Table Names**: `snake_case` (e.g. `users`, `audit_logs`).

### 2.2 Data & Database Rules

- **Soft Delete Policy**: ALWAYS enforce soft-delete filtering (`WHERE deleted_at IS NULL`). Never hard delete database records.
- **Database Architecture**: All SQL/Prisma database queries MUST be encapsulated inside `QueryBuilder.ts`.
- **Versioning**: Any table that requires version history MUST have a corresponding `<table_name>_history` or `<table_name>_version` table.
- **Data Validation**: Every database read/write MUST run through pre-processing (validate/sanitize outgoing data before it is written) and post-processing (validate/transform incoming data against the defined types before it is used), so the data saved to and read from the database always matches the expected schema types.

### 2.3 Centralization Rules

- **UI & Response Text**: All UI texts, response messages, HTTP status codes, and route paths MUST be defined in `AppConstants.ts` and `RouteConstants.ts`.
- **API & Redirection Paths**: All internal APIs, redirection routes, and 3rd-party API paths MUST be defined in `RedirectionConstants.ts` and `ApiConstants.ts`.
- **TypeScript Interfaces**: All TypeScript interfaces MUST be defined in `RoleInterfaceConstants.ts` and `UserInterfaceConstants.ts`.
- **Environment Config**: All monorepo components MUST read from a single root `.env` file — no per-package `.env` files.
- **No Hardcoded Config Values**: All configurable/sensitive values (e.g. JWT expiry time, token secrets, timeouts, retry counts, rate limits, third-party keys) MUST be written in the `.env` file and read from there — never hardcoded directly in the code.

### 2.4 Logging

Two log types MUST be maintained:

- **Audit Logs**: Track which user performed which action, for every user-triggered action (e.g. button clicks) that changes state.
- **System Logs**: Record the response/result of every internal API, redirection URL, or 3rd-party API call, tagged by severity (`success`, `error`, `info`, `warning`), so failures can be traced after the fact.

### 2.5 State Management

- UI state MUST stay in sync with the database: e.g. deleting a record from the UI must remove/soft-delete that record everywhere it is rendered (all tables/views referencing it).

### 2.6 Code Quality

- Avoid duplicate logic. Extract shared logic into helper files/folders, organized for readability and maintainability.

## 3. Security & Auth

- **Password Hashing**: Passwords MUST be hashed with bcrypt (or equivalent), minimum 10 salt rounds. Never store plain-text passwords.
- **Rate Limiting**: All public-facing APIs MUST have rate limiting/throttling applied.
- **Input Validation**: All incoming request data MUST be validated and sanitized at the API boundary before it reaches business logic.
- **CORS Policy**: Allowed origins MUST be explicitly whitelisted via `.env` — never use a wildcard (`*`) in production.

## 4. API Design

- **Response Shape**: All API responses MUST follow a standard shape: `{ success, data, message, error }`.
- **Status Codes**: HTTP status codes MUST be used consistently per scenario (e.g. `200` success, `201` created, `400` validation error, `401` unauthorized, `404` not found, `500` server error) and referenced via `AppConstants.ts`, never hardcoded inline.
- **Pagination**: List endpoints MUST support pagination with a documented default page size and max page size.
- **Versioning**: APIs MUST be versioned (e.g. `/v1/`, `/v2/`) so breaking changes don't affect existing consumers.

## 5. Error Handling

- **Global Handler**: Every service MUST have a single global error handler; errors must not be caught and silently discarded.
- **Custom Error Classes**: Use a defined error class hierarchy (e.g. `ValidationError`, `AuthError`, `NotFoundError`) instead of throwing raw strings/objects.
- **Mandatory Logging**: Every caught error MUST be written to System Logs with severity, message, and stack trace/context.

## 6. Testing

- **Coverage**: New features MUST ship with tests; minimum coverage threshold to be enforced in CI.
- **Test Structure**: Unit, integration, and e2e tests MUST live in separate, clearly named folders.
- **Mocking**: Database and 3rd-party API calls MUST be mocked in unit tests — no live network/DB calls in the unit test suite.

## 7. Git & Workflow

- **Branch Naming**: `feature/<name>`, `fix/<name>`, `chore/<name>`, `hotfix/<name>`.
- **Commit Messages**: Follow Conventional Commits (e.g. `feat: add backup worker`, `fix: correct soft-delete filter`).
- **Pull Requests**: MUST pass CI and have at least one review before merge; PR description must state what changed and why.

## 8. Code Style & Tooling

- **Linting/Formatting**: ESLint + Prettier are enforced; no manually-formatted code that conflicts with the configured rules.
- **TypeScript Strictness**: `strict: true` in `tsconfig.json`; use of `any` requires an inline comment justifying it.

## 9. Folder Structure

- Standard monorepo layout: `apps/` for deployable apps, `packages/` for shared libraries, `shared/` for cross-cutting utilities/constants.
- New features MUST be placed in the correct existing module — do not create ad-hoc top-level folders.

## 10. Documentation

- **Docstrings/JSDoc**: All exported functions MUST have a docstring/JSDoc comment describing params, return type, and purpose.
- **README**: Every package/app MUST maintain an up-to-date `README.md` describing its purpose and setup steps.

## 11. Performance

- **Caching**: Frequently-read, rarely-changed data MUST be cached (e.g. Redis or in-memory) with a defined TTL.
- **N+1 Prevention**: `QueryBuilder.ts` queries MUST avoid N+1 patterns — use joins/batching instead of looped single-record queries.

## 12. Deployment & CI/CD

- **Pipeline**: Every push MUST run lint, type-check, and tests in CI before merge is allowed.
- **Environment Promotion**: Code MUST move `dev → staging → prod` in order; no direct hotfixes to prod without an approved exception process.
- **Rollback Plan**: Every deployment MUST have a documented/scripted rollback path (e.g. previous build tag redeploy).
- **Approvals**: Production deployments require at least one approval separate from the author.

## 13. Observability & Monitoring

- **Health Checks**: Every service MUST expose a `/health` (or equivalent) endpoint for uptime checks.
- **Metrics**: Key metrics (request latency, error rate, queue depth, etc.) MUST be tracked, not just logged.
- **Alerting**: Critical failures (from System Logs) MUST trigger an alert (e.g. Slack/email/PagerDuty) above a defined severity threshold — not just sit in a log file.

## 14. Dependency Management

- **Lockfiles**: `package-lock.json` / `yarn.lock` (or equivalent) MUST NEVER be committed — add them to `.gitignore`.
- **Upgrades**: Dependency upgrades MUST be a separate PR from feature work.
- **Vulnerability Scanning**: `npm audit` (or equivalent) MUST run in CI; high/critical vulnerabilities block merge.

## 15. Accessibility (if applicable — projects with UI)

- Use semantic HTML and proper ARIA attributes.
- All interactive elements MUST be keyboard-navigable.
- Maintain sufficient color contrast per WCAG AA.

## 16. Internationalization (if applicable — multi-language projects)

- No hardcoded user-facing strings in components — all text MUST go through the same centralized text constants used for `AppConstants.ts`, keyed for translation.
- New languages MUST NOT require code changes, only new translation files.

## 17. Data Backup & Disaster Recovery

- **Backup Schedule**: Production database MUST have automated backups on a defined schedule (e.g. daily) with a defined retention period.
- **Restore Testing**: Backup restore process MUST be tested periodically, not just assumed to work.

## 18. Feature Flags (if applicable)

- Risky or incomplete features MUST ship behind a feature flag rather than a long-lived branch.
- Flags MUST have an owner and a removal plan — no permanent flags left in code indefinitely.

## 19. Onboarding

- Root `README.md` MUST include: prerequisites, local setup steps, how to run the project, how to run tests, and where to find this `agents.md`.
- A new developer (or agent) should be able to get the project running locally within ~10 minutes using only the README.

## 20. Pre-Commit Automation

- **General Principle**: None of the automation below should ever block a commit. If a required step wasn't run or a file is missing/outdated, the agent MUST inform the user that it's required and why — but MUST still let the commit proceed.
- **VERSION File**: A `VERSION` file at the project root MUST be created (if missing, starting at `0.1.0`) or updated automatically before every commit, bumped according to the nature of the change (patch for fixes, minor for new backward-compatible features, major for breaking changes).
- **Release Docs**: Before every commit, a documentation file summarizing the change MUST be generated automatically inside a `doc/` folder at the project root. This acts as an internal release note and MUST NOT be pushed — add `doc/` to `.gitignore`.
- **Release Doc Header**: Every release note MUST begin with a header block containing, in this order: **PR Title**, **Description** (short, plain-language summary of what changed and why), **Commit** (hash), **Branch Name**, and **Ticket Name/ID**. The rest of the doc (detailed change summary) follows below the header.
- **Doc Quality**: Every generated doc (release note and any other project documentation) MUST be written clearly enough that someone unfamiliar with the codebase can read it and understand what the project/change does — plain language, no unexplained jargon or internal shorthand.
- **Doc Folder Privacy**: The entire `doc/` folder is internal-only and MUST stay in `.gitignore` — never shared or pushed to the remote repository.

### 20.1 Engineering Audit — Overall Scorecard

- **Audit Prompt Location**: The full engineering-audit prompt lives in a standalone file, `audit-prompt.md`, at the project root. This file MUST be added to `.gitignore` and MUST NEVER be committed — it is not referenced or duplicated inside this `agents.md` file for that reason.
- **When It Runs**: On every commit, the agent runs the audit described in `audit-prompt.md` against the current state of the codebase.
- **Full Report**: The complete audit report (all 10 sections — Header, Executive Summary, Overall Scorecard, Critical Issues, Code Quality Snapshot, Refactoring Opportunities, Production Readiness Checklist, Top 25 Improvements, Category Detail Scores, Final Verdict) is generated and saved as `doc/review.md`, following the same `doc/` folder rules as release notes: internal-only, MUST stay in `.gitignore`, never pushed.
- **What Gets Shown to the User**: After each commit, the agent MUST only display the **Overall Scorecard** table (section 3 of the audit) back to the user directly — not the full report. The full report remains available in `doc/review.md` for reference if the user wants to open it themselves.
- **Non-Blocking**: Same principle as the rest of this section — the audit must never block a commit. If it can't run for any reason, inform the user and let the commit proceed.

## 21. Stack-Specific Conventions (Next.js / Prisma / Better Auth)

- **Authorization Source of Truth**: NEVER take `userId` from the client for authorization decisions. Always bind it from the server session.
- **Server Mutations**: Colocate `"use server"` modules under `features/<domain>/*Actions.ts`. Every exported action MUST call one of the following from `lib/actionAuth.ts`: `requireActionUser`, `requireActionAdmin`, `requireActionBlogStaff`, `requireActionActor`, or `allowAnonymousAction`.
- **Identifiers**: Follows section 2.1 — **variables MUST be `snake_case`** (e.g. `user_id`, `deleted_at`); functions and files keep their `camelCase`/`PascalCase` rules from 2.1. Use the `@/` path alias for the repo root.
- **Data Layer**: Prisma Client lives in `lib/prisma.ts`. Prefer `include` over N+1 queries. Soft-delete using `deletedAt` wherever the schema defines it.
- **Validation**: Zod at all mutation boundaries — schemas live in `lib/schemas`, plus dedicated schemas for contact forms, env, and API v1.
- **Routes & Constants**: Paths, roles, and error codes live in `lib/routes.ts` and `lib/constants.ts`.
- **Auth (Better Auth)**: Product layouts use `requireSession()`. Admin layouts use `requireAdminSession()`. Blog staff layouts use `requireBlogStaffSession()`.
- **Jobs**: Job queue runs on Postgres. Production MUST set `CRON_SECRET` and MUST NOT set `JOBS_INLINE=true`.
