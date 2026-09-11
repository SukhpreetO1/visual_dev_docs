/**
 * API response contracts and error payloads.
 */

/**
 * Standard API Response envelope.
 */
export interface ApiResponse<T = unknown> {
  /** Indicates whether the operation succeeded */
  success: boolean;
  /** Payload payload data if successful */
  data?: T;
  /** Human-readable status or summary message */
  message?: string;
  /** Error detail structure if failed */
  error?: ApiError;
}

/**
 * Standard error detail payload.
 */
export interface ApiError {
  /** Application error code identifier */
  code: string;
  /** Human-readable error description */
  message: string;
  /** Field-level validation error details */
  details?: Record<string, string[]>;
  /** Optional stack trace in non-production environments */
  stack?: string;
}

/**
 * Standard paginated response envelope.
 */
export interface PaginatedResponse<T> {
  /** Array of items for the current page */
  items: T[];
  /** Pagination metadata */
  meta: {
    /** Current page number (1-based) */
    page: number;
    /** Number of items per page */
    limit: number;
    /** Total number of matching items across all pages */
    total_items: number;
    /** Total count of pages available */
    total_pages: number;
    /** Whether next page exists */
    has_next_page: boolean;
    /** Whether previous page exists */
    has_previous_page: boolean;
  };
}
