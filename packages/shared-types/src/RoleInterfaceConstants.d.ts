/**
 * Role and permission interface definitions and role enum constants.
 */
/**
 * User roles available in the system.
 */
export declare enum UserRole {
    STUDENT = "STUDENT",
    AUTHOR = "AUTHOR",
    ADMIN = "ADMIN"
}
/**
 * Role definition interface.
 */
export interface IRole {
    /** Unique identifier for the role */
    id: string;
    /** Role name (e.g., STUDENT, AUTHOR, ADMIN) */
    name: UserRole;
    /** Human-readable description of the role */
    description?: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * Permission definition interface.
 */
export interface IPermission {
    /** Unique identifier for the permission */
    id: string;
    /** Unique key identifying the permission action (e.g., users:impersonate) */
    permission_key: string;
    /** Human-readable description of the permission */
    description?: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * Role-Permission mapping interface.
 */
export interface IRolePermission {
    /** Identifier of the associated role */
    role_id: string;
    /** Identifier of the associated permission */
    permission_id: string;
    /** Creation timestamp */
    created_at: Date;
}
