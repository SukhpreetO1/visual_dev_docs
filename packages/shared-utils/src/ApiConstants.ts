/**
 * Internal and v1 REST API endpoint route constants.
 */

export const ApiConstants = {
  V1_PREFIX: '/v1',
  AUTH: {
    LOGIN: '/v1/auth/login',
    REGISTER: '/v1/auth/register',
    LOGOUT: '/v1/auth/logout',
    REFRESH: '/v1/auth/refresh',
    ME: '/v1/auth/me',
  },
  LESSONS: {
    BASE: '/v1/lessons',
    BY_ID: '/v1/lessons/:id',
    BY_SLUG: '/v1/lessons/slug/:slug',
    STEPS: '/v1/lessons/:id/steps',
  },
  ROADMAPS: {
    BASE: '/v1/roadmaps',
    BY_DOMAIN: '/v1/roadmaps/:domain',
    NODES: '/v1/roadmaps/:id/nodes',
    EDGES: '/v1/roadmaps/:id/edges',
  },
  USERS: {
    BASE: '/v1/users',
    ME_PROGRESS: '/v1/users/me/progress',
    ME_BOOKMARKS: '/v1/users/me/bookmarks',
    IMPERSONATE: '/v1/users/:id/impersonate',
  },
  AI: {
    EXPLAIN: '/v1/ai/explain',
    SUMMARIZE: '/v1/ai/summarize',
  },
  HEALTH: '/health',
} as const;
