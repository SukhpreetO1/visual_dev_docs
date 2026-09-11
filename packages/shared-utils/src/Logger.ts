/* eslint-disable no-console */
/**
 * Logging helper utilities for Audit and System logs.
 */

/**
 * Log entry payload structure for Audit Logs.
 */
export interface AuditLogPayload {
  user_id: string;
  action: string;
  entity_type: string;
  entity_id?: string;
  details?: Record<string, unknown>;
  timestamp: string;
}

/**
 * Log entry payload structure for System Logs.
 */
export interface SystemLogPayload {
  severity: 'info' | 'warning' | 'error' | 'success';
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

/**
 * Records a user-triggered audit action event.
 *
 * @param user_id - The ID of the user performing the action
 * @param action - Action description key (e.g., 'user.impersonate', 'lesson.create')
 * @param entity_type - Target entity classification
 * @param entity_id - Optional target entity identifier
 * @param details - Additional action parameters or metadata
 */
export function auditLog(
  user_id: string,
  action: string,
  entity_type: string,
  entity_id?: string,
  details?: Record<string, unknown>,
): AuditLogPayload {
  const payload: AuditLogPayload = {
    user_id,
    action,
    entity_type,
    entity_id,
    details,
    timestamp: new Date().toISOString(),
  };

  // Internal audit log output (can be hooked into DB logger or persistent transport)
  console.info(
    `[AUDIT] [${payload.timestamp}] User ${user_id} -> ${action} on ${entity_type}:${entity_id || 'N/A'}`,
  );
  return payload;
}

/**
 * Records a system operational event or error.
 *
 * @param severity - Event severity level ('info', 'warning', 'error', 'success')
 * @param message - Descriptive log message
 * @param context - Additional diagnostic context or stack traces
 */
export function systemLog(
  severity: 'info' | 'warning' | 'error' | 'success',
  message: string,
  context?: Record<string, unknown>,
): SystemLogPayload {
  const payload: SystemLogPayload = {
    severity,
    message,
    context,
    timestamp: new Date().toISOString(),
  };

  const prefix = `[SYSTEM:${severity.toUpperCase()}] [${payload.timestamp}]`;
  if (severity === 'error') {
    console.error(`${prefix} ${message}`, context || '');
  } else if (severity === 'warning') {
    console.warn(`${prefix} ${message}`, context || '');
  } else {
    console.info(`${prefix} ${message}`, context || '');
  }

  return payload;
}
