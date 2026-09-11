/**
 * Lesson, step, version, and cheat sheet interfaces.
 */

/**
 * Lesson interface definition.
 */
export interface ILesson {
  /** Unique lesson identifier */
  id: string;
  /** URL slug identifier */
  slug: string;
  /** Title of the lesson */
  title: string;
  /** Short summary of lesson contents */
  description?: string;
  /** Category or domain key */
  domain: string;
  /** Target audience difficulty level */
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  /** Soft delete timestamp */
  deleted_at?: Date | null;
  /** Creation timestamp */
  created_at: Date;
  /** Last update timestamp */
  updated_at: Date;
}

/**
 * Single step within a lesson.
 */
export interface ILessonStep {
  /** Unique step identifier */
  id: string;
  /** Parent lesson identifier */
  lesson_id: string;
  /** Sequence position of the step */
  step_number: number;
  /** Title of the step */
  title: string;
  /** Markdown content for explanation */
  content_markdown: string;
  /** Code snippet provided in step */
  code_snippet?: string;
  /** Programming language for code snippet */
  language?: string;
  /** Soft delete timestamp */
  deleted_at?: Date | null;
  /** Creation timestamp */
  created_at: Date;
  /** Last update timestamp */
  updated_at: Date;
}

/**
 * Historical version of a lesson.
 */
export interface ILessonVersion {
  /** Unique version record identifier */
  id: string;
  /** Associated lesson ID */
  lesson_id: string;
  /** Incremental version number */
  version_number: number;
  /** Serialized snapshot of lesson content */
  snapshot_data: Record<string, unknown>;
  /** Change description note */
  change_log?: string;
  /** User ID who published this version */
  created_by: string;
  /** Creation timestamp */
  created_at: Date;
}

/**
 * Quick reference cheat sheet interface.
 */
export interface ICheatSheet {
  /** Unique cheat sheet identifier */
  id: string;
  /** URL slug */
  slug: string;
  /** Title of the cheat sheet */
  title: string;
  /** Target domain identifier */
  domain: string;
  /** Markdown or JSON content */
  content: string;
  /** Soft delete timestamp */
  deleted_at?: Date | null;
  /** Creation timestamp */
  created_at: Date;
  /** Last update timestamp */
  updated_at: Date;
}
