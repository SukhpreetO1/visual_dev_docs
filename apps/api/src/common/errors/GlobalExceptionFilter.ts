/**
 * Global exception filter translating all caught exceptions into standard ApiResponse shape and logging to system_logs.
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiError } from '@visual-dev-docs/shared-types';
import { QueryBuilder } from '../../database/QueryBuilder';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  async catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An unexpected server error occurred.';
    let code = 'INTERNAL_ERROR';
    let details: Record<string, string[]> | undefined;
    let stack: string | undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'string') {
        message = res;
      } else if (typeof res === 'object' && res !== null) {
        message = (res as any).message || exception.message;
        code = (res as any).error || 'HTTP_ERROR';
        details = (res as any).details;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      stack = exception.stack;
    }

    const errorPayload: ApiError = {
      code,
      message,
      details,
      stack: process.env.NODE_ENV === 'development' ? stack : undefined,
    };

    const apiResponse: ApiResponse = {
      success: false,
      message,
      error: errorPayload,
    };

    // Log to System Logs database table per AGENTS.md §2.4 & §5
    try {
      await QueryBuilder.createSystemLog({
        severity: status >= 500 ? 'error' : 'warning',
        message: `${status} - ${message}`,
        context: { details },
        stack_trace: stack,
      });
    } catch {
      // Avoid failing exception filter if DB logging fails
    }

    response.status(status).json(apiResponse);
  }
}
