/**
 * User, session, progress, bookmark, and impersonation interfaces.
 */
import { UserRole } from './RoleInterfaceConstants';
/**
 * User interface.
 */
export interface IUser {
    /** Unique identifier for the user */
    id: string;
    /** Primary email address */
    email: string;
    /** Hashed password string */
    password_hash: string;
    /** Assigned role */
    role: UserRole;
    /** Optional display name */
    display_name?: string | null;
    /** Optional avatar URL */
    avatar_url?: string | null;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * User session interface.
 */
export interface ISession {
    /** Unique session identifier */
    id: string;
    /** ID of the associated user */
    user_id: string;
    /** Opaque session token string */
    token: string;
    /** IP address of the client */
    ip_address?: string | null;
    /** User agent string of the client */
    user_agent?: string | null;
    /** Session expiration date */
    expires_at: Date;
    /** Creation timestamp */
    created_at: Date;
}
/**
 * User progress tracking interface.
 */
export interface IUserProgress {
    /** Unique progress record identifier */
    id: string;
    /** Associated user ID */
    user_id: string;
    /** Associated lesson ID */
    lesson_id: string;
    /** Completion status string (e.g. NOT_STARTED, IN_PROGRESS, COMPLETED) */
    status: string;
    /** Completion percentage (0 - 100) */
    progress_percentage: number;
    /** Timestamp when lesson was completed */
    completed_at?: Date | null;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * User bookmark interface.
 */
export interface IBookmark {
    /** Unique bookmark identifier */
    id: string;
    /** Associated user ID */
    user_id: string;
    /** Target entity type (e.g., LESSON, ROADMAP, DOCUMENT) */
    entity_type: string;
    /** Target entity ID */
    entity_id: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
}
/**
 * Admin impersonation session interface.
 */
export interface IImpersonationSession {
    /** Unique impersonation record identifier */
    id: string;
    /** Admin user ID performing impersonation */
    admin_id: string;
    /** Target user ID being impersonated */
    target_user_id: string;
    /** Reason provided for impersonation */
    reason: string;
    /** Session expiration timestamp */
    expires_at: Date;
    /** Session termination timestamp */
    ended_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
}
