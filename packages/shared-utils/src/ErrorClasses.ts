/**
 * Custom Error Class hierarchy for structured exception handling.
 */

import { HttpStatusCodes } from './AppConstants';

/**
 * Base Application Error class.
 */
export class AppError extends Error {
  /** HTTP status code associated with error */
  public readonly statusCode: number;
  /** Application error code identifier */
  public readonly code: string;
  /** Additional error details or context */
  public readonly details?: Record<string, string[]>;

  constructor(
    message: string,
    statusCode: number = HttpStatusCodes.INTERNAL_SERVER_ERROR,
    code: string = 'INTERNAL_ERROR',
    details?: Record<string, string[]>,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Validation Error class thrown when request input fails validation.
 */
export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed', details?: Record<string, string[]>) {
    super(message, HttpStatusCodes.BAD_REQUEST, 'VALIDATION_ERROR', details);
  }
}

/**
 * Authentication Error class thrown when user authentication fails.
 */
export class AuthError extends AppError {
  constructor(message: string = 'Authentication failed') {
    super(message, HttpStatusCodes.UNAUTHORIZED, 'AUTH_ERROR');
  }
}

/**
 * Forbidden Error class thrown when authenticated user lacks permissions.
 */
export class ForbiddenError extends AppError {
  constructor(message: string = 'Access forbidden') {
    super(message, HttpStatusCodes.FORBIDDEN, 'FORBIDDEN_ERROR');
  }
}

/**
 * Not Found Error class thrown when requested resource is missing.
 */
export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, HttpStatusCodes.NOT_FOUND, 'NOT_FOUND_ERROR');
  }
}
