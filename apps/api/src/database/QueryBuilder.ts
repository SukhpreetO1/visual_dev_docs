/**
 * Centralized Database Query Builder encapsulating soft-delete filters and queries per AGENTS.md §2.2 & §11.
 */

import { prisma } from '../lib/prisma';
import { UserRole } from '@visual-dev-docs/shared-types';

export class QueryBuilder {
  // --- USERS ---
  static async findUserById(id: string) {
    return prisma.users.findFirst({
      where: { id, deleted_at: null },
    });
  }

  static async findUserByEmail(email: string) {
    return prisma.users.findFirst({
      where: { email, deleted_at: null },
    });
  }

  static async findUsersPaginated(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      prisma.users.findMany({
        where: { deleted_at: null },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      prisma.users.count({ where: { deleted_at: null } }),
    ]);
    return { items, total };
  }

  static async createUser(data: {
    email: string;
    password_hash: string;
    display_name?: string;
    role?: UserRole;
  }) {
    return prisma.users.create({
      data: {
        email: data.email,
        password_hash: data.password_hash,
        display_name: data.display_name,
        role: data.role || UserRole.STUDENT,
      },
    });
  }

  static async updateUserRole(userId: string, role: UserRole) {
    return prisma.users.update({
      where: { id: userId },
      data: { role },
    });
  }

  static async softDeleteUser(userId: string) {
    return prisma.users.update({
      where: { id: userId },
      data: { deleted_at: new Date() },
    });
  }

  // --- ROLES & PERMISSIONS ---
  static async findRoleByName(name: string) {
    return prisma.roles.findFirst({
      where: { name, deleted_at: null },
      include: {
        role_permissions: {
          include: { permission: true },
        },
      },
    });
  }

  static async findAllRoles() {
    return prisma.roles.findMany({
      where: { deleted_at: null },
      include: {
        role_permissions: {
          include: { permission: true },
        },
      },
    });
  }

  static async createRole(name: string, description?: string) {
    return prisma.roles.create({
      data: { name, description },
    });
  }

  static async softDeleteRole(roleId: string) {
    return prisma.roles.update({
      where: { id: roleId },
      data: { deleted_at: new Date() },
    });
  }

  static async findAllPermissions() {
    return prisma.permissions.findMany({
      where: { deleted_at: null },
    });
  }

  static async createPermission(permission_key: string, description?: string) {
    return prisma.permissions.create({
      data: { permission_key, description },
    });
  }

  static async assignPermissionsToRole(
    roleId: string,
    permissionIds: string[],
  ) {
    await prisma.role_permissions.deleteMany({ where: { role_id: roleId } });
    const data = permissionIds.map((permission_id) => ({
      role_id: roleId,
      permission_id,
    }));
    return prisma.role_permissions.createMany({ data });
  }

  static async findUserPermissions(userId: string): Promise<string[]> {
    const user = await this.findUserById(userId);
    if (!user) return [];

    const roleName = user.role;
    const role = await prisma.roles.findFirst({
      where: { name: roleName, deleted_at: null },
      include: {
        role_permissions: {
          include: { permission: true },
        },
      },
    });

    if (!role) return [];
    return role.role_permissions
      .filter((rp) => rp.permission && rp.permission.deleted_at === null)
      .map((rp) => rp.permission.permission_key);
  }

  // --- LESSONS & HISTORY ---
  static async findLessonsPaginated(
    page: number = 1,
    limit: number = 20,
    domain?: string,
  ) {
    const skip = (page - 1) * limit;
    const whereClause = {
      deleted_at: null,
      ...(domain ? { domain } : {}),
    };
    const [items, total] = await Promise.all([
      prisma.lessons.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
          steps: {
            where: { deleted_at: null },
            orderBy: { step_number: 'asc' },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      prisma.lessons.count({ where: whereClause }),
    ]);
    return { items, total };
  }

  static async findLessonById(id: string) {
    return prisma.lessons.findFirst({
      where: { id, deleted_at: null },
      include: {
        steps: { where: { deleted_at: null }, orderBy: { step_number: 'asc' } },
      },
    });
  }

  static async createLesson(data: {
    domain: string;
    topic: string;
    title: string;
    description: string;
    config_json: any;
    steps?: {
      step_number: number;
      title: string;
      content_markdown: string;
      code_snippet?: string;
      language?: string;
    }[];
  }) {
    return prisma.lessons.create({
      data: {
        domain: data.domain,
        topic: data.topic,
        title: data.title,
        description: data.description,
        config_json: data.config_json,
        steps: data.steps ? { create: data.steps } : undefined,
      },
      include: { steps: true },
    });
  }

  static async softDeleteLesson(id: string) {
    return prisma.lessons.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }

  // --- ROADMAPS ---
  static async findRoadmapByDomain(domain: string) {
    return prisma.roadmap_nodes.findMany({
      where: { domain, deleted_at: null },
    });
  }

  // --- AUDIT & SYSTEM LOGS ---
  static async createAuditLog(data: {
    user_id?: string;
    action: string;
    entity: string;
    entity_id?: string;
    metadata?: any;
  }) {
    return prisma.audit_logs.create({ data });
  }

  static async findAuditLogsPaginated(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      prisma.audit_logs.findMany({
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      prisma.audit_logs.count(),
    ]);
    return { items, total };
  }

  static async createSystemLog(data: {
    severity: string;
    message: string;
    context?: any;
    stack_trace?: string;
  }) {
    return prisma.system_logs.create({ data });
  }
}
