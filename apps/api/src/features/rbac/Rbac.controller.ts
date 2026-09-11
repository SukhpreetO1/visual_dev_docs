/**
 * RBAC Controller: Full CRUD for dynamic roles and permissions with instant cache invalidation.
 */

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { QueryBuilder } from '../../database/QueryBuilder';
import { permissionCache } from '../../lib/permissionCache';

@Controller('v1')
export class RbacController {
  @Get('roles')
  async listRoles() {
    return QueryBuilder.findAllRoles();
  }

  @Post('roles')
  async createRole(@Body() body: { name: string; description?: string }) {
    const role = await QueryBuilder.createRole(body.name, body.description);
    permissionCache.invalidateAll();
    return role;
  }

  @Delete('roles/:id')
  async deleteRole(@Param('id') id: string) {
    const deleted = await QueryBuilder.softDeleteRole(id);
    permissionCache.invalidateAll();
    return deleted;
  }

  @Get('permissions')
  async listPermissions() {
    return QueryBuilder.findAllPermissions();
  }

  @Post('permissions')
  async createPermission(
    @Body() body: { permission_key: string; description?: string },
  ) {
    const perm = await QueryBuilder.createPermission(
      body.permission_key,
      body.description,
    );
    permissionCache.invalidateAll();
    return perm;
  }

  @Patch('roles/:id/permissions')
  async assignPermissions(
    @Param('id') roleId: string,
    @Body() body: { permission_ids: string[] },
  ) {
    const result = await QueryBuilder.assignPermissionsToRole(
      roleId,
      body.permission_ids,
    );
    permissionCache.invalidateAll();
    return result;
  }
}
