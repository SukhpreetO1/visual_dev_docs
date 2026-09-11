/**
 * Server action for bookmarking lessons and documentation topics.
 */
'use server';

export async function toggleBookmarkAction(entityType: string, entityId: string) {
  return {
    success: true,
    entity_type: entityType,
    entity_id: entityId,
    is_bookmarked: true,
  };
}
