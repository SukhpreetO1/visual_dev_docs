/**
 * Permission key string constants used for authorization checks.
 */

export const PermissionKeys = {
  USERS_VIEW: 'users:view',
  USERS_CREATE: 'users:create',
  USERS_UPDATE: 'users:update',
  USERS_DELETE: 'users:delete',
  USERS_IMPERSONATE: 'users:impersonate',
  LESSONS_CREATE: 'lessons:create',
  LESSONS_UPDATE: 'lessons:update',
  LESSONS_DELETE: 'lessons:delete',
  ROADMAPS_MANAGE: 'roadmaps:manage',
  SYSTEM_AUDIT_VIEW: 'system:audit:view',
} as const;

export type PermissionKey = (typeof PermissionKeys)[keyof typeof PermissionKeys];
