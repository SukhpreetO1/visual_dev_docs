/**
 * Interactive document, versions, sections, and AI summary interfaces.
 */
/**
 * Interactive visual documentation document interface.
 */
export interface IDocument {
    /** Unique document identifier */
    id: string;
    /** URL slug */
    slug: string;
    /** Document title */
    title: string;
    /** Category or technology domain */
    domain: string;
    /** Summary or description */
    description?: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
    /** Last update timestamp */
    updated_at: Date;
}
/**
 * Document version history interface.
 */
export interface IDocVersion {
    /** Unique version record identifier */
    id: string;
    /** Parent document ID */
    document_id: string;
    /** Incremental version number */
    version_number: number;
    /** Raw markdown content */
    content_markdown: string;
    /** User ID of author who saved version */
    author_id: string;
    /** Soft delete timestamp */
    deleted_at?: Date | null;
    /** Creation timestamp */
    created_at: Date;
}
/**
 * Heading section within a document.
 */
export interface IDocSection {
    /** Unique section identifier */
    id: string;
    /** Parent document ID */
    document_id: string;
    /** Anchor identifier / slug for direct linking */
    anchor_id: string;
    /** Heading level (1-6) */
    level: number;
    /** Heading title text */
    title: string;
    /** Order sequence index within document */
    order_index: number;
}
/**
 * AI-generated summary payload for doc sections or lessons.
 */
export interface IAISummary {
    /** Unique summary identifier */
    id: string;
    /** Target entity type (e.g. DOCUMENT, LESSON) */
    entity_type: string;
    /** Target entity identifier */
    entity_id: string;
    /** Generated concise summary markdown */
    summary_text: string;
    /** Key takeaways bullet points */
    key_takeaways: string[];
    /** Model identifier used for generation */
    model_name: string;
    /** Creation timestamp */
    created_at: Date;
}
