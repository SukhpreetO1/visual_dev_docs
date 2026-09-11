/**
 * UI strings, HTTP status code constants, application metadata, and default error messages.
 */

/**
 * Standard HTTP Status Codes used across all microservices and API handlers.
 */
export const HttpStatusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 533,
} as const;

export type HttpStatusCode = (typeof HttpStatusCodes)[keyof typeof HttpStatusCodes];

/**
 * Common application UI text and error messages.
 */
export const AppConstants = {
  APP_NAME: 'Visual Dev Docs',
  VERSION: '0.1.0',
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  ERROR_MESSAGES: {
    GENERIC_SERVER_ERROR: 'An unexpected server error occurred. Please try again later.',
    UNAUTHORIZED: 'You must be logged in to perform this action.',
    FORBIDDEN: 'You do not have sufficient permissions to access this resource.',
    NOT_FOUND: 'The requested resource could not be found.',
    VALIDATION_FAILED: 'Validation failed. Please verify your input.',
    RATE_LIMIT_EXCEEDED: 'Too many requests. Please slow down and try again.',
  },
  SUCCESS_MESSAGES: {
    SAVED: 'Changes saved successfully.',
    DELETED: 'Resource deleted successfully.',
    CREATED: 'Resource created successfully.',
  },
} as const;
