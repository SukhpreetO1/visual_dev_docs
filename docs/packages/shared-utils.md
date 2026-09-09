# Shared Utils

## 1. Purpose

The `@visual-dev-docs/shared-utils` package provides a standardized collection of pure utility functions used across the monorepo to avoid code duplication and ensure consistent data processing and manipulation.

## 2. Responsibilities

- **Data Transformation**: Common mapping and filtering helpers.
- **Async Management**: Timing, retry, and promise-based flow control utilities.
- **String/Object Helpers**: Safe property access, deep merging, and formatting functions.
- **Logging/Diagnostics**: Internal helpers for uniform debugging.

## 3. Public APIs

- `formatDate(date: Date): string`: Utility for standard date formatting.
- `deepClone<T>(obj: T): T`: Utility for deep object cloning.
- `generateUUID(): string`: Helper for unique ID generation.
- `debounce(fn: Function, delay: number): Function`: Common flow control utility.

## 4. Folder Structure

```text
packages/shared-utils/
 ├ src/
 │   ├ index.ts          # Main exports
 │   ├ string/           # String manipulation helpers
 │   ├ object/           # Object manipulation helpers
 │   └ async/            # Async and flow control helpers
 ├ package.json         # Package configuration
 └ tsconfig.json        # TypeScript configuration
```

## 5. Dependencies

- **Internal**:
  - `@visual-dev-docs/shared-types`: (Optional) for type-safe utilities.
- **External**:
  - `lodash` (Planned): Selected portions for common object/array manipulations.

## 6. Example Usage

```typescript
import { deepClone, generateUUID } from '@visual-dev-docs/shared-utils';

const original = { id: 1, name: 'Original' };
const clone = deepClone(original);
const newId = generateUUID();

console.log('Cloned Object:', clone);
console.log('Generated ID:', newId);
```

## 7. Integration

`shared-utils` is a low-level package consumed at every level of the monorepo, from the core engines to the final UI components and API controllers. It has no dependencies on other internal packages, ensuring it remains highly portable.
