/**
 * Roadmap, node, edge, and status interface definitions.
 */
/**
 * Node status enum for student roadmap progression.
 */
export declare enum INodeStatus {
    LOCKED = "LOCKED",
    AVAILABLE = "AVAILABLE",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}
/**
 * Interactive visual roadmap interface.
 */
export interface IRoadmap {
    /** Unique roadmap identifier */
    id: string;
    /** URL slug */
    slug: string;
    /** Title of the roadmap */
    title: string;
    /** Target domain key (e.g., nodejs, react, devops) */
    domain: string;
    /** Detailed description */
    description?: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * Node element within a visual roadmap graph.
 */
export interface IRoadmapNode {
    /** Unique node identifier */
    id: string;
    /** Associated roadmap identifier */
    roadmap_id: string;
    /** Label text displayed on node */
    label: string;
    /** Node type classification (e.g. TOPIC, MILESTONE, LESSON) */
    node_type: 'TOPIC' | 'MILESTONE' | 'LESSON';
    /** Associated lesson ID if node links directly to a lesson */
    lesson_id?: string | null;
    /** X-coordinate position in visual diagram */
    position_x: number;
    /** Y-coordinate position in visual diagram */
    position_y: number;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * Edge connection linking two roadmap nodes.
 */
export interface IRoadmapEdge {
    /** Unique edge identifier */
    id: string;
    /** Associated roadmap identifier */
    roadmap_id: string;
    /** Source node ID */
    source_node_id: string;
    /** Target node ID */
    target_node_id: string;
    /** Connection label or relationship description */
    label?: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
}
