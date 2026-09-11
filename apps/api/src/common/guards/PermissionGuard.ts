/**
 * Decorator and Guard for fine-grained permission-based RBAC checks.
 */

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
  CustomDecorator,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { permissionCache } from '../../lib/permissionCache';

export const PERMISSION_KEY = 'require_permission';

/**
 * RequirePermission decorator to specify permission keys on controller methods.
 */
export const RequirePermission = (
  permissionKey: string,
): CustomDecorator<string> => SetMetadata(PERMISSION_KEY, permissionKey);

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermission = this.reflector.getAllAndOverride<string>(
      PERMISSION_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermission) {
      return true; // No permission specified, default to allowing if authenticated
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user || !user.id) {
      return false;
    }

    const userPermissions = await permissionCache.getUserPermissions(user.id);
    return userPermissions.has(requiredPermission);
  }
}
