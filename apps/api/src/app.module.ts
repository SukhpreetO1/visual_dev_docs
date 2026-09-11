/**
 * Root AppModule registering feature controllers, guards, and filters.
 */

import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HealthController } from './features/health/Health.controller';
import { AuthController } from './features/auth/Auth.controller';
import { RbacController } from './features/rbac/Rbac.controller';
import { LessonsController } from './features/lessons/Lessons.controller';
import { AdminController } from './features/admin/Admin.controller';
import { GlobalExceptionFilter } from './common/errors/GlobalExceptionFilter';
import { ResponseTransformInterceptor } from './common/interceptors/ResponseTransformInterceptor';

@Module({
  imports: [],
  controllers: [
    HealthController,
    AuthController,
    RbacController,
    LessonsController,
    AdminController,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
  ],
})
export class AppModule {}
