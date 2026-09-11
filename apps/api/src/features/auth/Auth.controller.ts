/**
 * Auth controller endpoints: login, register, impersonate, exit-impersonate.
 */

import {
  Controller,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { QueryBuilder } from '../../database/QueryBuilder';
import { UserRole } from '@visual-dev-docs/shared-types';
import * as bcrypt from 'bcrypt';

@Controller('v1/auth')
export class AuthController {
  @Post('register')
  async register(
    @Body() body: { email: string; password: string; display_name?: string },
  ) {
    const existing = await QueryBuilder.findUserByEmail(body.email);
    if (existing) {
      return {
        success: false,
        message: 'Email address is already registered.',
      };
    }
    const password_hash = await bcrypt.hash(body.password, 10);
    const user = await QueryBuilder.createUser({
      email: body.email,
      password_hash,
      display_name: body.display_name,
      role: UserRole.STUDENT,
    });

    return {
      user_id: user.id,
      email: user.email,
      role: user.role,
      token: `mock-jwt-session-token-${user.id}`,
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { email: string; password: string }) {
    const user = await QueryBuilder.findUserByEmail(body.email);
    if (!user) {
      return { success: false, message: 'Invalid credentials provided.' };
    }
    const match = await bcrypt.compare(body.password, user.password_hash);
    if (!match) {
      return { success: false, message: 'Invalid credentials provided.' };
    }

    await QueryBuilder.createAuditLog({
      user_id: user.id,
      action: 'user.login',
      entity: 'users',
      entity_id: user.id,
    });

    return {
      user_id: user.id,
      email: user.email,
      role: user.role,
      token: `mock-jwt-session-token-${user.id}`,
    };
  }

  @Post('impersonate/:userId')
  async impersonate(@Param('userId') targetUserId: string) {
    const target = await QueryBuilder.findUserById(targetUserId);
    if (!target) {
      return {
        success: false,
        message: 'Target user for impersonation not found.',
      };
    }

    await QueryBuilder.createAuditLog({
      action: 'admin.impersonate_start',
      entity: 'users',
      entity_id: targetUserId,
    });

    return {
      impersonating: true,
      target_user: { id: target.id, email: target.email, role: target.role },
      token: `mock-impersonation-token-${target.id}`,
    };
  }
}
