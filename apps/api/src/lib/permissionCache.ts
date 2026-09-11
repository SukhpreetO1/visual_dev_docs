/**
 * In-memory Permission Cache with TTL for fast RBAC checks.
 */

import { QueryBuilder } from '../database/QueryBuilder';

class PermissionCacheService {
  private cache = new Map<
    string,
    { permissions: Set<string>; expiresAt: number }
  >();
  private ttlMs = 5 * 60 * 1000; // 5 minutes TTL

  async getUserPermissions(userId: string): Promise<Set<string>> {
    const now = Date.now();
    const cached = this.cache.get(userId);

    if (cached && cached.expiresAt > now) {
      return cached.permissions;
    }

    const permissionsArray = await QueryBuilder.findUserPermissions(userId);
    const permissionSet = new Set(permissionsArray);

    this.cache.set(userId, {
      permissions: permissionSet,
      expiresAt: now + this.ttlMs,
    });

    return permissionSet;
  }

  invalidateUser(userId: string) {
    this.cache.delete(userId);
  }

  invalidateAll() {
    this.cache.clear();
  }
}

export const permissionCache = new PermissionCacheService();
