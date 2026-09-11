/**
 * Client UI route path constants.
 */

export const RouteConstants = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ROADMAP_LIST: '/roadmaps',
  ROADMAP_DETAIL: '/roadmap/:domain',
  LEARN_TOPIC: '/learn/:domain/:topic',
  CHEATSHEET: '/cheatsheet/:domain',
  DOCUMENTS: '/docs',
  DOCUMENT_DETAIL: '/docs/:slug',
  SIMULATION: '/simulation/:id',
  PROFILE: '/settings/profile',
  ADMIN_DASHBOARD: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_ROLES: '/admin/roles',
  ADMIN_AUDIT_LOGS: '/admin/audit-logs',
} as const;

export type RoutePath = (typeof RouteConstants)[keyof typeof RouteConstants];
